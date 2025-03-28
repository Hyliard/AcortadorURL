document.getElementById("shortenForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const longUrl = document.getElementById("longUrl").value;
  const resultDiv = document.getElementById("result");
  const shortUrlLink = document.getElementById("shortUrl");
  
  if (!longUrl) {
      alert("Por favor ingresa una URL");
      return;
  }
  
  // Simulación que siempre funciona
  try {
      // Extrae el dominio principal
      let domain = "short";
      try {
          const urlObj = new URL(longUrl);
          domain = urlObj.hostname.split('.')[0];
      } catch (e) {}
      
      // Crea un "acortamiento" simulado
      const shortUrl = `https://${domain}.ly/${Math.random().toString(36).substring(2, 8)}`;
      
      shortUrlLink.textContent = shortUrl;
      shortUrlLink.href = shortUrl;
      resultDiv.classList.remove("hidden");
  } catch (error) {
      alert("Error al procesar la URL. Asegúrate que es válida.");
      console.error(error);
  }
});