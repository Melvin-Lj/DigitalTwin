<template>
  <footer id="contact">
    <div class="container">
      <div class="footer-content">
        <div class="site-info">
          <h4>Digitaler Zwilling Definition</h4>
          <p>
<<<<<<< HEAD
            <i>"A digital twin becomes a living virtual image of a real object through the use of sensors, the Internet of Things (IoT) and networking with information sources."</i>
            <br><br>
            Digital twins accompany real objects as real-time copies - starting with their creation through to their disposal. Digital product information is linked with real status and behavior information.<br>
            &#10149; With the help of the digital twins, companies can identify problems at an early stage and initiate improvements in development, production, sales and service.
          </p>
        </div>
        <div class="contact">
          <h4>Your company is missing or your data has changed?</h4>
          <a class="kontakt-btn" href="https://github.com/Melvin-Lj/DigitalTwin/issues"
            >Contact Us</a
=======
            <i
              >"Ein Digitaler Zwilling wird durch den Einsatz von Sensoren, Internet
              of Things (IoT) und der Vernetzung mit Informationsquellen zum
              lebenden virtuellen Abbild eines realen Objektes."</i
            ><br><br>
            Digitale Zwillinge begleiten reale Objekte als Echtzeitkopien –
            beginnend mit ihrer Entstehung bis hin zu ihrer Entsorgung. Dabei
            werden digitale Produktinformationen mit realen Zustands- und
            Verhaltensinformationen verknüpft.<br>
            &#10149; Mithilfe der digitalen Zwillinge können Unternehmen Probleme frühzeitig
            erkennen und Verbesserungen in Entwicklung, Produktion, Vertrieb und
            Service anstoßen.
          </p>
        </div>
        <div class="contact">
          <h4>Ihr Unternehmen fehlt oder Ihre Daten haben sich geändert?</h4>
          <a class="kontakt-btn" href="https://github.com/Melvin-Lj/DigitalTwin/issues"
            >Kontaktieren Sie uns</a
>>>>>>> 4b84e330a979764c450490d17eea4ff7b0c47a20
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-image: linear-gradient(
    to bottom,
    #353a40,
    #31363b,
    #2e3235,
    #2b2e30,
    #282a2b
  );
  color: #fff;
  margin-top: 50px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 0px 40px;
  align-items: center;
  text-align: center;
}

.site-info {
  width: 100%;
  max-width: 860px;
  margin-bottom: 43px;
}

.site-info h4{
  margin-bottom: 20px;
  border-bottom: 1px solid;
  padding-bottom: 10px;
}

.contact h4{
  margin-bottom: 20px;
  border-top: 1px solid;
  padding-top: 30px;
}
.contact {
  width: 100%;
  max-width: 860px;
}

.contact a {
  display: block;
  text-decoration: none;
  background-color: #000;
  color: #fff;
  padding: 15px 20px;
  text-align: center;
  font-weight: 700;
  transition: all 0.3s;
  width: 100%;
  max-width: 300px;
  margin: auto;
}

.contact a:hover {
  background-color: #e10707;
}

.bottom-text {
  max-width: 750px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #ccc;
}
</style>
