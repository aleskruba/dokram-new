const translations = {
    cz: {
      about: "O Nás",
      services: "Služby",
      contact: "Kontakt",
      welcome: "Vítejte na stránkách firmy",
      since: "S vámi již od roku 2015",
      history_about: "O Nás",
      foundation: "Společnost DOKRAM s.r.o. vznikla ke dni 22.4.2015 jako přímý pokračovatel aktivit firmy PLASTOCHEM BRNO spol. s.r.o., divize dopravy a spedice.",
      description:"Jsme spediční společnost specializující se na silniční nákladní dopravu. Nabízíme komplexní služby v oblasti spedice, včetně mezinárodní a vnitrostátní kamionové dopravy. Každodenně se také zaměřujeme na ADR přepravu, která zahrnuje přepravu nebezpečných nákladů. Naše sídlo se nachází v Brně.",
      services_offer:"V silniční dopravě zajišťujeme tyto služby",
      fulltruck:"Vnitrostátní a mezinárodní celovozové přepravy",
      partload:"Vnitrostátní a mezinárodní dokládkové přepravy",
      adr:"Přepravy zboží v režimu ADR",
      oversized:"Nadrozměrné přepravy",
      forwarding:"V rámci spedičních služeb disponujeme těmito vozidly",
      trailers:"Klasické návěsy – 90 m³ s tonáží do 25 t",
      volume:"Velkoobjemové soupravy – 110-120 m³ s tonáží do 24 t",
      solo:"sola (22 m³- 50 m³ s tonáží 1,9t - 10 t",
      vans:"Dodávky skříňové, plachtové",
      card1:"DOPRAVA A SPEDICE",
      card2:"DOPRAVA A SPEDICE",
      accounting:"FAKTURACE",
      it:"IT ADMINISTRÁTOR",
      reach_us:"Zde nás najdete po-pá 7-16.00",
      address:"Adresa provozovny: Pražákova 36, 61900",
      email:"Váš email",
      message:"Zde napište zprávu...",
      message_label:"Zpráva",
      send:"Odešli",
      extract:"Výpis z obchodního rejstříku",
      email_validation:"Neplatný formát e-mailu.",
      message_validation:"Zpráva musí obsahovat alespoň 10 znaků.",
    
    },
    en: {
      about: "About Us",
      services: "Services",
      contact: "Contact",
      welcome: "Welcome to the website of",
      since: "With you since 2015",
      history_about: "About Us",
      foundation:"The company DOKRAM s.r.o. was established on April 22, 2015 as a direct successor to the activities of PLASTOCHEM BRNO spol. s.r.o., transport and forwarding division.",
      description:"We are a forwarding company specializing in road freight transport. We offer comprehensive services in the field of forwarding, including international and domestic truck transport. On a daily basis, we also focus on ADR transport, which includes the transport of dangerous goods. Our headquarters are located in Brno.",
      services_offer:"We provide these services in road transport",
      fulltruck:"Domestic and international full-truck transports",
      partload:"Domestic and international part-load transports",
      adr:"Transport of dangerous goods ADR",
      oversized: "Transport of oversized shipments",
      forwarding:"As part of freight-forwarding services, we have these vehicles at our disposal",
      trailers:"Classic semi-trailers – 90 m³ capacity with a load capacity of up to 25 tons.",
      volume:"High-volume truck sets – 110-120 m³ capacity with a load capacity of up to 24 tons.",
      solo:"Solo trucks (22 m³ - 50 m³ capacity with a load capacity of 1.9 to 10 tons",
      vans:"Box vans and curtain-sided vans.",
      card1:"TRANSPORT AND FORWARDING",
      card2:"TRANSPORT AND FORWARDING",
      accounting:"ACCOUNTING",
      it:"IT ADMINISTRATOR",
      reach_us:"You can find us here Mon-Fri 7am-4pm",
      address:"Address of the establishment: Pražákova 36, ​​61900",
      email:"Your email address",
      message:"Write your message here...",
      send:"Send",
      message_label:"Message",
      extract:"Company Registration Extract",
        email_validation:"Invalid email format.",
        message_validation:"Message must contain at least 10 characters.",

    },
  };


  function translatePage(language) {
  document.getElementById("nav-about").textContent = translations[language].about;
  document.getElementById("nav-services").textContent = translations[language].services;
  document.getElementById("nav-contact").textContent = translations[language].contact;
  document.getElementById("welcome").textContent = translations[language].welcome;
  document.getElementById("since").textContent = translations[language].since;
  document.getElementById("history-about").textContent = translations[language].history_about;
  document.getElementById("foundation").textContent = translations[language].foundation;
  document.getElementById("description").textContent = translations[language].description;
  document.getElementById("services-offer").textContent = translations[language].services_offer;
  document.getElementById("fulltruck").textContent = translations[language].fulltruck;
  document.getElementById("transport-partload").textContent = translations[language].partload;
  document.getElementById("adr").textContent = translations[language].adr;
  document.getElementById("oversized").textContent = translations[language].oversized;
  document.getElementById("forwarding").textContent = translations[language].forwarding;
  document.getElementById("trailers").textContent = translations[language].trailers;
  document.getElementById("volume").textContent = translations[language].volume;
  document.getElementById("solo").textContent = translations[language].solo;
  document.getElementById("vans").textContent = translations[language].vans;
  document.getElementById("card1").textContent = translations[language].card1;
  document.getElementById("card2").textContent = translations[language].card2;
  document.getElementById("accounting").textContent = translations[language].accounting;
  document.getElementById("it").textContent = translations[language].it;
  document.getElementById("reach-us").textContent = translations[language].reach_us;
  document.getElementById("address").textContent = translations[language].address;
  document.getElementById("email").placeholder = translations[language].email;
  document.getElementById("message").placeholder = translations[language].message;
  document.getElementById("send").textContent = translations[language].send;
  document.getElementById("message-label").textContent = translations[language].message_label;
  document.getElementById("extract").textContent = translations[language].extract;
  document.getElementById("extract").textContent = translations[language].extract;
  document.getElementById("extract").textContent = translations[language].extract;

}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const language = localStorage.getItem("language");
  // Get input elements
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Get error display spans
  const emailError = document.querySelector(".error-email");
  const messageError = document.querySelector(".error-message");

  // Reset error messages
  emailError.textContent = "";
  messageError.textContent = "";

  // Validation Flags
  let valid = true;

  // Email Validation: Regular expression to check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = translations[language].email_validation;
      valid = false;
  }

  // Message Validation: At least 10 characters
  if (messageInput.value.trim().length < 10) {
      messageError.textContent = translations[language].message_validation;
      valid = false;
  }

  // If valid, submit the form
  if (valid) {
    // You can either submit the form programmatically like this:
    event.target.submit(); // Submits the form

    // Or use an AJAX request to send the data (if you don't want a full page reload)
    // Example of sending data with Fetch API:
    /*
    const formData = new FormData(event.target);
    fetch('/submit-form-endpoint', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log("Form submitted successfully", data);
      // Handle success (optional)
    })
    .catch(error => {
      console.error("Error submitting form", error);
      // Handle error (optional)
    });
    */
  }
});
