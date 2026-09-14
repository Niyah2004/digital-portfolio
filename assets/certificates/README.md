# Certificate PDFs

Drop certificate PDF files in this folder, then wire them up in
`src/data/portfolioData.ts`:

1. Add the file here, e.g. `claude-architect-foundations.pdf`.
2. Import it at the top of `portfolioData.ts`:
   ```ts
   import claudeArchitectFoundationsCert from '../../assets/certificates/claude-architect-foundations.pdf';
   ```
3. Set `pdfUrl: claudeArchitectFoundationsCert` on the matching certificate
   entry in `educationData.certificates`.

Until `pdfUrl` is set, the certificate card on the site shows an
"Attach certificate PDF" placeholder instead of a working link.
