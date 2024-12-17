<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <meta property="og:author" content="Dokram s.r.o."/>
    <meta property="og:title" content="DOPRAVA A SPEDICE"/>
    <meta property="og:description" content="Vnitrostátní a mezinárodní doprava spedice"/>
    <meta property="og:image" content="dokram-logo.png"/>
 
    <link rel="icon" href="favicon.png" type="image/x-icon" />
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Racing+Sans+One&family=Sixtyfour+Convergence&display=swap" rel="stylesheet">
</head>
    <body >

        <header id="header">

        <div id='responseMessage' ></div>   

        <?php
    // Check if the response parameters are set in the query string
    if (isset($_GET['status']) ) {
        
        $status = $_GET['status'];
        $message = $_GET['message'];
            // Output the message into the responseMessage div
        echo "<script>
        window.onload = function() {
             console.log('sss ok');
            var responseMessageDiv = document.getElementById('responseMessage');
            
            // Optionally change the background color based on status
            if ('$status' === 'success') {
                responseMessageDiv.style.backgroundColor = 'green';
                responseMessageDiv.innerHTML = '<strong>✓</strong>';
            } else {
                responseMessageDiv.style.backgroundColor = 'red';
             responseMessageDiv.innerHTML = '<strong>ERROR</strong>';
            }

            // After 2 seconds, clear the query parameters in the URL
            setTimeout(function() {
                responseMessageDiv.style.display = 'none';
                history.replaceState(null, document.title, window.location.pathname);
            }, 2000);
        };
      </script>";


    }
    ?>

        <div class="header-left">
            <div class="image-logo">
                <a href="#">
                <img src="dokram-logo.png" 
                    alt=""
                    class="image-logo-img"
                    >
                </a>
            </div>
         </div>


        <nav>
            <ul class="menu-ul">
              <li class="menu-li" id="menu-li"><a href="#about" id="nav-about"></a></li>
              <li class="menu-li" id="menu-li"><a href="#services" id="nav-services"></a></li>
              <li class="menu-li" id="menu-li"><a href="#contact" id="nav-contact"></a></li>
            </ul>
          </nav>

    <div class="theme" >
        <img src="cz.svg" alt="cz" width="30px" id="cz-flag">
        <img src="gb.svg" alt="en" width="30px" id="en-flag">
        <img src="" alt="moon" width="30px" id="theme-icon">
    </div>
    </header>


    
    <section class="section-image-truck">
        <div class="overlay-content">
            <p id="welcome"></p>
            <h1 class="">DOKRAM</h1>

            <h2 class="" id="since"></h2>

              </div>
    </section>

<main>
            <section class="section-history" id="about">
        <div class="history">
        <div class="title" id="history-about"></div>
        <div class="history-p" id="foundation" >
           
        </div>
        <div class="history-p" id="description">
        </div>
    </section>

    <div class="offer " id="services">
    <section class="section-offer" id="services">
        <div class="history">
            <div class="title" id="services-offer"></div>
        <div class="history-p" id="fulltruck">

        </div>
        <div class="history-p" id="transport-partload">

        </div>
        <div class="history-p" id="adr">
     
        </div>
        <div class="history-p" id="oversized">
       </div>
        </div>
        <div class="history" id="offer">
            <div class="title" id="forwarding"> </div>
            <div class="history-p" id="trailers">
       
            </div>
            <div class="history-p" id="volume">
            </div>
            <div class="history-p" id="solo">

            </div>
            <div class="history-p" id="vans">
       
            </div>
    </section>

    <div class="imagesDiv">
        <div class="images">
            <div class="image1">
                <img src="partload_2.png" alt="truck">
            </div>
            <div class="image1">
               <img src="adr.png" alt="adr">
   
            </div>
        </div>
    </div>



</div>


<section class="section-contact" id="contact">


<div class="cards-spedition">
    <div class="card-container">
        <div class="card">
            <div class="card-left">
                <img src="avatar.jpg" alt="avatar">
            </div>
            <div class="card-right">
                <p class="card-right-h1">Aleš Kruba</p>
                <p class="card-right-h2" id="card1"></p>
                <p class="card-right-h2-phone">📞 +420 728 949 062</p>
            </div>
        </div>
        <div class="cards-image">
            <img src="truck2.jpg" alt="">
        </div>
    </div>

    <div class="card-container">
        <div class="card">
            <div class="card-left">
                <img src="avatar.jpg" alt="avatar">
            </div>
            <div class="card-right">
                <p class="card-right-h1">ing.Dalibor Hladík</p>
                <p class="card-right-h2" id="card2"></p>
                <p class="card-right-h2-phone">📞 +420 724 219 510</p>
            </div>
        </div>
 
        <div class="cards-image">
            <img src="truck2.jpg" alt="">
        </div>
    </div>
 
</div>

<div class="cards-spedition">

    <div class="card-container">
        <div class="card">
            <div class="card-left">
                <img src="avatar.jpg" alt="avatar">
            </div>
            <div class="card-right">
                <p class="card-right-h1">ing.Oskar MARŠA</p>
                <p class="card-right-h2" id="accounting"></p>
                <p class="card-right-h2-phone">📞 +420 724 328 468

                </p>
            </div>
        </div>

        <div class="cards-image">
            <img src="account.jpg" alt="">
        </div>
    </div>

    <div class="card-container">
        <div class="card">
            <div class="card-left">
                <img src="avatar.jpg" alt="avatar">
            </div>
            <div class="card-right">
                <p class="card-right-h1" >Aleš Kruba</p>
                <p class="card-right-h2" id="it"></p>
                <p class="card-right-h2-phone">📞 +420 728 949 062</p>
            </div>
        </div>
        <div class="cards-image">
            <img src="it.jpg" alt="">
        </div>
    </div>
</div>


</section>

<section class="section-map">
    <div class="address-container">
        <div class="address-header" id="reach-us"></div>
        <div class="address-details" id="address"></div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?  Pražákova+36,61900"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

</section>
<section class="form-section">
    <form action="private/process_form.php" method="post" class="form" id="contactForm">
        <label for="email" class="label">Email</label>
        <input 
            type="text" 
            id="email" 
            class="email" 
            name="email" 
            placeholder=""
    
        />
        <span class="error-email" style="color: red; font-size: 0.9em;"></span>  
        <label for="message" class="label" id="message-label"></label>
        <textarea 
            name="message" 
            id="message" 
            class="message" 
            placeholder="" 
    
        ></textarea>
        <span class="error-message" style="color: red; font-size: 0.9em;"></span>    
        <button type="submit" class="btn" id="send"></button>
    </form>
    

   </section>
</main>

<script>

</script>

<footer class="footer">
    <div class="footer-section-copy">
        <p>DOKRAM © 2015–2024
        </p>
    </div>
    <div class="footer-section">
    <a href="https://or.justice.cz/ias/ui/rejstrik-$firma?nazev=dokram" class="footer-link" id="extract" target="_blank">Link Text</a>
    </div>
    <div class="footer-section">
        <p>Telefon/Fax: 543232323</p>
    </div>
</footer>

<script src="translation.js"></script>
    <script src="script.js"></script>
 
</body>
</html>




