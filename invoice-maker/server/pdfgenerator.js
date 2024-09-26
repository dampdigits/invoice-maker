import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';
import fs from 'fs';

// Create a new PDF document
const doc = new PDFDocument({ size: 'A4', margin: 50 });

// Pipe the PDF into a file
doc.pipe(fs.createWriteStream('invoice_with_qr.pdf'));

// Function to generate a QR code and embed it in a PDF
async function generatePDFWithQR(doc, url) {
	// Generate QR code as a Data URL (base64)
	const qrCodeDataUrl = await QRCode.toDataURL(url);

	// Extract base64 data without the prefix
	const base64Data = qrCodeDataUrl.split(',')[1];

	// Convert the base64 string to a buffer
	const qrCodeBuffer = Buffer.from(base64Data, 'base64');

	// Add the QR code to the PDF
	doc.fontSize(20).text('Scan to Pay:', 400, 580);
	doc.image(qrCodeBuffer, 400, 610, { fit: [120, 120] }); // Adjust QR code position
}

// Function to draw the header
function generateHeader(doc) {
	doc
		.fontSize(20)
		.text('Invoice', 50, 50)
		.fontSize(10)
		.text('Mobile App Redesign', 50, 75)
		.text('Invoice #', 450, 50, { align: 'right' })
		.text('07292022', 450, 65, { align: 'right' })
		.text('Issue Date', 450, 80, { align: 'right' })
		.text('Jul 29, 2022', 450, 95, { align: 'right' })
		.text('Due Date', 450, 110, { align: 'right' })
		.text('Aug 29, 2022', 450, 125, { align: 'right' })
		.moveDown();
}

// Function to generate customer information
function generateCustomerInformation(doc) {
	doc
		.text('Bill To:', 50, 150)
		.font('Helvetica-Bold')
		.text('Apple, Inc.', 50, 165)
		.font('Helvetica')
		.text('1 Infinite Loop', 50, 180)
		.text('Cupertino, CA, 95014', 50, 195);
}

// Function to generate the invoice table
function generateInvoiceTable(doc) {
	doc
		.font('Helvetica-Bold')
		.text('CHARGES', 50, 250)
		.text('QUANTITY', 250, 250, { align: 'right' })
		.text('TOTAL', 450, 250, { align: 'right' })
		.moveDown();

	doc
		.font('Helvetica')
		.text('Application Design', 50, 270)
		.text('1', 250, 270, { align: 'right' })
		.text('$5,500.00', 450, 270, { align: 'right' })
		.moveDown();

	doc
		.fontSize(8)
		.text('Third round of feedback requested by the client', 50, 285)
		.fontSize(10)
		.text('Additional Revisions', 50, 310)
		.text('1', 250, 310, { align: 'right' })
		.text('$375.00', 450, 310, { align: 'right' })
		.moveDown();

	doc
		.text('Icon Design', 50, 330)
		.text('1', 250, 330, { align: 'right' })
		.text('$1,250.00', 450, 330, { align: 'right' });
}

// Function to generate the invoice totals
function generateInvoiceTotals(doc) {
	doc
		.fontSize(10)
		.text('Subtotal', 400, 400, { align: 'right' })
		.text('$7,125.00', 450, 400, { align: 'right' });

	doc
		.text('Discount (5%)', 400, 420, { align: 'right' })
		.text('$356.25', 450, 420, { align: 'right' });

	doc
		.font('Helvetica-Bold')
		.text('Total Due:', 400, 440, { align: 'right' })
		.text('$6,768.75', 450, 440, { align: 'right' });
}

// Function to generate footer
function generateFooter(doc) {
	doc
		.fontSize(10)
		.text('Payments:', 50, 700)
		.text('Checks payable to:', 50, 715)
		.font('Helvetica-Bold')
		.text('Felix Driscoll', 50, 730)
		.font('Helvetica')
		.text('123 Baker Ln', 50, 745)
		.text('Los Angeles, CA, 91004', 50, 760);

	doc
		.fontSize(10)
		.text('Contact:', 300, 700)
		.font('Helvetica-Bold')
		.text('Felix Appleseed', 300, 715)
		.font('Helvetica')
		.text('hello@felixappleseed.com', 300, 730)
		.text('(123) 456-7890', 300, 745);
}

// Function to create the full invoice
async function createInvoiceWithQR() {
	// Draw header, customer info, and table
	generateHeader(doc);
	generateCustomerInformation(doc);
	generateInvoiceTable(doc);
	generateInvoiceTotals(doc);
	generateFooter(doc);

	// Generate QR code
	const url = 'https://dampdigits.me';
	await generatePDFWithQR(doc, url);

	// Finalize the PDF and end the stream
	doc.end();
}

// Generate the invoice
createInvoiceWithQR().then(() => {
	console.log('Invoice with QR Code generated successfully');
});

