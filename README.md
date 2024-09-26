# Make Your Invoice

[![Next.js](https://img.shields.io/badge/Next.js-11.1.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green?style=flat&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.0-blue?style=flat&logo=mongodb)](https://www.mongodb.com/)

**Invoice-Maker** is an all-in-one platform designed to effortlessly generate professional invoices for small businesses, event organizers, and merchants. This platform enables users to create invoices, email them directly to customers, and provides a scannable QR code for easy access to transaction details and payment links.

## Features

- **Professional Invoice Generation**: Quickly create professional invoices with customizable details.
- **QR Code Integration**: Each invoice includes a scannable QR code for instant access to transaction details and payments.
- **Real-Time Updates**: Transaction details are updated in real-time for both merchants and customers.
- **Autofill Feature**: Easily generate invoices with placeholder data, perfect for bulk invoicing.
- **Download Options**: Download invoices in both PDF and CSV formats for easy record-keeping and financial management.
- **User-Friendly Interface**: Intuitive design that makes invoice management simple and efficient.

## Technology Stack

- **Frontend**: Next.js, React
- **Backend**: Express
- **Database**: MongoDB
- **Package Management**: PNPM
- **PDF Generation**: PDFKit, PDFKit-Table
- **QR Code Generation**: QRCode Library
- **Data Conversion**: json2csv

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/dampdigits/invoice-maker.git
    cd invoice-maker
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Start the development server:
    ```bash
    pnpm dev
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

1. Create an account or log in.
2. Fill in the customer and transaction details.
3. Click on "Generate Invoice" to create the invoice.
4. Use the "Email Invoice" option to send it to your customer.
5. Download the invoice as a PDF or CSV if needed.

## Deployment

This application is deployed on Vercel. You can access it at [makeyourinvoice.vercel.app](https://makeyourinvoice.vercel.app).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [PDFKit](http://pdfkit.org/)
- [QRCode Library](https://github.com/soldair/node-qrcode)

## Contact

For inquiries, please reach out to [invoicegenerator270@gmail.com](mailto:invoicegenerator270@gmail.com).
