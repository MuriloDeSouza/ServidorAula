// teste 1 de baixar relatórios formato zip
// function downloadZip() {
//     const zipData = "Rel_ZIP"; // Substitua pelos dados reais do arquivo ZIP
  
//     const blob = new Blob([zipData], { type: "application/zip" });
//     const url = window.URL.createObjectURL(blob);
  
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "Rel.zip"; // Nome do arquivo ZIP
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     window.URL.revokeObjectURL(url);
//     document.body.removeChild(a);
//   }
  
  function downloadZip() {
    const zipUrl = "Relatorio.pdf"; // Substitua pela URL real do arquivo ZIP
    
    fetch(zipUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement("a");
        a.href = url;
        a.download = "Relatorio.pdf"; // Nome do arquivo ZIP
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  }
  