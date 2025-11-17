import cancion from "../assets/song.mp3";
import "remixicon/fonts/remixicon.css";
import Countdown from "./Countdown";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";
import { GalleryPraga } from "./GalleryPraga";
import LugaresPraga from "./LugaresPraga";
import hojasVerdes2 from "../assets/hojasVerdes2.svg";
import hojasVerdesIzq from "../assets/hojasVerdesIzq.svg";
import ringsInicio from "../assets/ringsInicio.svg";


const Invitacion = () => {
  const targetDate = new Date("2026-02-13T18:00:00-03:00");

  const colorPrincipal = "#f0b17e";

  return (
    <div className="w-full relative font-modernaText overflow-hidden">
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>
      <div className="relative flex items-center justify-center h-screen w-full text-center bg-fondo-praga-mobile md:bg-fondo-praga bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black" />
        <img
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763387456/Disen%CC%83o_sin_ti%CC%81tulo_100_1_jhbvuu.jpg"
          alt="Fondo nombres"
          className="absolute inset-0 w-full h-full object-cover md:object-contain opacity-80"
        />
        <div
          data-aos="fade-in"
          className="relative z-10 flex flex-col justify-between h-full w-full text-center"
        >
          {/* Texto arriba */}
          <div className="pt-20">
            <p className="text-xl md:text-3xl uppercase tracking-widest text-white font-montserrat">
              ¡Nos Casamos!
            </p>
          </div>

          {/* Texto abajo */}
          <div className="pb-5">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-2 font-tangerine">
              Sofia &amp; Gonzalo
            </h1>
            <p className="text-lg md:text-xl text-white font-montserrat">
              13 / 02 / 2026
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-up"
          className="w-full text-center px-8 md:px-20 py-10 font-montserrat"
        >
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed italic">
            Nuestro amor nació de lo simple, se fortaleció con el tiempo y hoy florece
            en esta nueva etapa que queremos compartir con ustedes.
          </p>
        </div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
        >
          <Countdown
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 font-montserrat"
            }
            targetDate={targetDate}
          />
        </section>

        <LugaresPraga
          linkCeremonia="https://maps.app.goo.gl/6CWyNR3hP8Lcd8c26"
          nombreIglesia="Parroquia San Pablo"
          nombreCivil="Registro Civil Villa Constitución"
          horaIglesia="21:15 hs"
          linkCivil="https://maps.app.goo.gl/hphVKxuiPHwKvWRv5"
          linkFiesta="https://maps.app.goo.gl/UVkgYw2nrwx7aZ8g8"
          nombreSalon="Chacra La Luisita - Trelew"
          horaFiesta="18:00hs"
          horaCivil="10:00hs"
          claseContainer="flex flex-col md:flex-row items-center justify-center gap-8 my-8 font-montserrat"
          claseTexto="text-gray-900"
        />
       <section
  id="cronograma"
  className="w-full bg-white py-12 px-6 md:px-20 font-montserrat"
  data-aos="fade-up"
>
  <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-14">
    Cronograma
  </h2>

  <div className="flex flex-col items-center gap-12 max-w-xs mx-auto">

    {/* 18hs Recepción */}
    <div data-aos="fade-up" className="flex flex-col items-center text-center relative">
      <span className="text-[#ce8045] text-4xl mb-2">
        <i class="ri-goblet-line"></i>
      </span>
      <p className="text-xl font-semibold text-gray-800">18:00 hs</p>

      <p className="text-lg text-gray-700">Recepción</p>
    </div>
    <div className="w-1 h-14 bg-[#ce8045] my-4 rounded-full" data-aos="fade-up"></div>

    {/* 19:00 Ceremonia */}
    <div data-aos="fade-up" className="flex flex-col items-center text-center relative">
      <span className="text-[#ce8045] text-4xl mb-2">
        <i className="ri-heart-2-line"></i>
      </span>
      <p className="text-xl font-semibold text-gray-800">19:00 hs</p>

      <p className="text-lg text-gray-700">Ceremonia</p>
    </div>
    <div className="w-1 h-14 bg-[#ce8045] my-4 rounded-full" data-aos="fade-up"></div>

    {/* 21:00 Cena */}
    <div data-aos="fade-up" className="flex flex-col items-center text-center relative">
      <span className="text-[#ce8045] text-4xl mb-2">
        <i className="ri-restaurant-line"></i>
      </span>
      <p className="text-xl font-semibold text-gray-800">21:00 hs</p>

      <p className="text-lg text-gray-700">Cena</p>
    </div>
    <div className="w-1 h-14 bg-[#ce8045] my-4 rounded-full" data-aos="fade-up"></div>

    {/* 00:00 Baile */}
    <div data-aos="fade-up" className="flex flex-col items-center text-center relative">
      <span className="text-[#ce8045] text-4xl mb-2">
        <i className="ri-music-2-line"></i>
      </span>
      <p className="text-xl font-semibold text-gray-800">00:00 hs</p>

      <p className="text-lg text-gray-700">Baile</p>
    </div>
    <div className="w-1 h-14 bg-[#ce8045] my-4 rounded-full" data-aos="fade-up"></div>

    {/* 05:00 Fin */}
    <div data-aos="fade-up" className="flex flex-col items-center text-center relative">
      <span className="text-[#ce8045] text-4xl mb-2">
        <i className="ri-timer-line"></i>
      </span>
      <p className="text-xl font-semibold text-gray-800">05:00 hs</p>
      <p className="text-lg text-gray-700 mt-3">Fin</p>
    </div>

  </div>
</section>
        <GalleryPraga
          images={[
            {
              index: 1,
              img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1763384455/WhatsApp_Image_2025-11-14_at_11.21.29_AM_bs236q.jpg",
            },
            {
              index: 2,
              img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1763384461/WhatsApp_Image_2025-11-14_at_11.21.30_AM_l8ac5a.jpg",
            },
            {
              index: 3,
              img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1763384469/WhatsApp_Image_2025-11-14_at_11.21.30_AM_1_oxr8ba.jpg",
            },
            {
              index: 4,
              img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1763384477/WhatsApp_Image_2025-11-14_at_11.21.30_AM_2_rk5ou3.jpg",
            },
            {
              index: 5,
              img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1763384484/WhatsApp_Image_2025-11-14_at_11.21.30_AM_3_j6dbm3.jpg",
            },
            // {
            //   index: 6,
            //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1760372528/e4323388-95c6-489f-9574-04a3ec9f15d7_g0th4v.jpg",
            // },
          ]}
        />

        <div className="bg-[#f0b17e] text-center text-white relative font-montserrat px-3">
          <GoogleCalendarButton
            background={{ backgroundColor: colorPrincipal }}
            titleCalendar="Casamiento de Sofia y Gonzalo"
            fechaComienzo="20260213T180000"
            fechaFin="20260214T050000"
            salon="Chacra La Luisita, Chacra 34 parcela 13, U9100 Trelew, Chubut"
            imgClass="text-white"
            buttonClass="bg-white hover:bg-transparent text-gray-800 hover:text-white border-white"
          />
        </div>
        <div className="relative">
          <img
            src={hojasVerdesIzq}
            alt="Decoración"
            className="absolute -left-20 lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
          />
          <DressCode dress_code="Formal" />
          <img
            src={hojasVerdes2}
            alt="Decoración"
            className="absolute -right-20 lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
          />
        </div>
        {/* <InstagramWall user="@chechu.guido" /> */}
        <DatosBancarios
          texto="Aquí podés ver el valor de la tarjeta y los datos bancarios para realizar la transferencia."
          claseContenedor=" text-white font-montserrat"
          claseBoton="border-2 border-blue-900 bg-white py-3 px-6 text-gray-800 rounded-full hover:bg-gray-100 hover:text-gray-800 transform transition-transform duration-300 ease-in-out"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{ backgroundColor: "white", borderColor: "white" }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu="0000003100013571540530"
          alias="sofiablanco26"
          banco="Mercado Pago"
          nombre="Sofia Ailin Blanco"
          borderModal="border-blue-500"
          textColor="text-blue-500"
        />
                <section className="bg-white py-10 text-center px-6 md:px-20 relative">
          <div
            data-aos="fade-up"
            className="max-w-3xl mx-auto bg-[#f8f5f0] border border-[#d8d3c4] rounded-3xl p-3 shadow-sm"
          >
            <p className="text-gray-700 text-lg md:text-xl  font-robotoSerif">
              Queremos que puedan disfrutar plenamente de la celebración, por eso nuestra boda será un evento para adultos (sin niños). <br /> <br /> <span className="text-base">¡Gracias por comprender y acompañarnos en este día tan especial!</span> <br /><span className="italic font-semibold text-[#ce8045]">¡ Los esperamos !</span>
            </p>
            <img
              src={ringsInicio}
              alt="Decoración anillos"
              className="w-20 mx-auto mt-6 opacity-80"
              />
          </div>
              </section>
        <TextoFinal
          textoFinal={
            <p className="text-2xl md:text-xl leading-relaxed">
              Nos encantaría que compartas este día tan especial con nosotros.
              <br />
              Por eso, te pedimos que confirmes tu asistencia.
            </p>
          }
          textClass="font-cormorantGaramond text-4xl text-gray-600 italic mt-20"
        />

        <Asistencia
          clase="pt-10 bg-fondo-banner font-montserrat"
          claseButton="border-2 py-3 px-6 rounded-full border-[#f0b17e] hover:border-gray-700 hover:bg-white hover:text-gray:800"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSfF5glcZNVNGtrUJGETo6WOsP7NwlGxLAQHs20OK2CCt8d__g/viewform?usp=sharing&ouid=101386997737484433208"
        />

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
