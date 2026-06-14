# Google Apps Script — Member Sync to Google Sheets

## How It Knows Which Sheet to Write To

The script targets a spreadsheet by its ID. By default it uses the same spreadsheet as the existing sync:

```
const SPREADSHEET_ID = '1L_bAun4U7dfhDR2WJHGHlT5CW3tfTKwDs_3qN0pOddk';
```

Then `SHEET_NAME = 'MEMBERS'` tells it to look for a **sheet tab** called **MEMBERS** within that spreadsheet.

**To use a different spreadsheet:** just change the `SPREADSHEET_ID` value.

---

## Setup Instructions

### 1. Create the Apps Script Project

1. Go to https://script.google.com
2. Click **+ New project**
3. Delete any default code and paste the **full script below**
4. Save the project (give it a name like "RAC Member Sync")
5. Deploy as a **Web App**:
   - Click **Deploy → New deployment**
   - Choose type: **Web app**
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**
   - Click **Authorize** and grant permissions (it needs access to your Google Sheets)
6. Copy the **Web App URL** that appears (looks like `https://script.google.com/macros/s/XXXXXXXXXXXXX/exec`)

### 2. Configure in Your Website

1. Open `src/routes/api/sync-members/+server.ts`
2. Replace the `MEMBERS_SHEET_APP_SCRIPT_URL` value with the Web App URL you copied

---

## Apps Script Code — Paste This into Google Apps Script Editor

```javascript
/**
 * RAC Member Sync — Google Apps Script
 * 
 * Receives member data from the RAC website and writes it to the MEMBERS sheet.
 * 
 * Expected columns: id, rac_number, full_name, phone, gmail
 */

// ⚠️ CONFIGURATION — Edit these if needed
const SPREADSHEET_ID = '1L_bAun4U7dfhDR2WJHGHlT5CW3tfTKwDs_3qN0pOddk';
const SHEET_NAME = 'MEMBERS';

/**
 * GET handler — simple health check
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'RAC Member Sync App is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * POST handler — receives member data and syncs to sheet
 */
function doPost(e) {
  try {
    // Parse incoming JSON payload
    const payload = JSON.parse(e.postData.contents);
    const members = payload.members;

    if (!members || !Array.isArray(members) || members.length === 0) {
      return createResponse(400, { error: 'No members data provided' });
    }

    // Open the spreadsheet by ID (more reliable than getActiveSpreadsheet for Web Apps)
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get or create the MEMBERS sheet tab
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Set header row
      const headers = [['id', 'rac_number', 'full_name', 'phone', 'gmail']];
      sheet.getRange(1, 1, 1, headers[0].length).setValues(headers);
      sheet.getRange(1, 1, 1, headers[0].length).setFontWeight('bold');
    }

    // Read existing rows to handle upserts (update existing, insert new)
    const existingData = sheet.getDataRange().getValues();
    const headers = existingData[0].map(h => String(h).toLowerCase().trim());
    
    // Find column indices
    const idIdx = headers.indexOf('id');
    const racIdx = headers.indexOf('rac_number');
    const nameIdx = headers.indexOf('full_name');
    const phoneIdx = headers.indexOf('phone');
    const gmailIdx = headers.indexOf('gmail');
    
    if (idIdx === -1) {
      return createResponse(400, { 
        error: 'Sheet is missing required column "id". Headers found: ' + headers.join(', ')
      });
    }

    // Build a map of existing rows keyed by ID (skip header row)
    const existingMap = new Map();
    for (let i = 1; i < existingData.length; i++) {
      const row = existingData[i];
      const rowId = String(row[idIdx]).trim();
      if (rowId && rowId !== '') {
        existingMap.set(rowId, i + 1); // +1 because sheet rows are 1-based
      }
    }

    let updatedCount = 0;
    let insertedCount = 0;
    const numCols = Math.max(headers.length, 5); // at least 5 columns

    // Process each member
    members.forEach(member => {
      const memberId = String(member.id).trim();
      const existingRowNum = existingMap.get(memberId);

      // Build the row data array
      const rowData = [
        member.id,
        member.rac_number || '',
        member.full_name || '',
        member.phone || '',
        member.gmail || ''
      ];

      // Pad to match sheet width
      while (rowData.length < numCols) rowData.push('');

      if (existingRowNum) {
        // Update existing row
        sheet.getRange(existingRowNum, 1, 1, rowData.length).setValues([rowData]);
        updatedCount++;
      } else {
        // Append new row
        sheet.appendRow(rowData);
        insertedCount++;
      }
    });

    return createResponse(200, {
      success: true,
      recordsProcessed: members.length,
      updated: updatedCount,
      inserted: insertedCount,
      message: `Sync complete: ${updatedCount} updated, ${insertedCount} new members added.`
    });

  } catch (err) {
    return createResponse(500, { error: 'Script error: ' + err.message });
  }
}

/**
 * Helper to return a JSON response
 */
function createResponse(statusCode, data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| **"Spreadsheet not found"** | Check that `SPREADSHEET_ID` in the script matches your Google Sheet's ID (the long string in its URL) |
| **"Sheet is missing required column"** | The MEMBERS sheet tab exists but lacks the `id` column header — the script creates these automatically if the tab doesn't exist |
| **Authorization errors** | After deploying, you MUST click **Authorize** and grant access to your Google Sheets |
| **"Cannot read property 'contents'"** | The server-side fetch needs to send proper JSON with `Content-Type: application/json` |
| **Blank page when opening URL** | The GET handler returns JSON — this is normal, it means the script is deployed. Try `?` at the end of the URL for testing |
| **CORS errors** | Apps Script Web Apps don't support CORS. The call must be server-to-server (which this is — it's called from your SvelteKit backend, not the browser) |