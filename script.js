/* =====================================================
   NAVEGACIÓN ENTRE PANTALLAS
===================================================== */

function mostrarPantalla(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   BOTÓN NO
===================================================== */

let noClicks = 0;

function decirNo() {

    const message = document.getElementById("noMessage");
    const button = document.getElementById("noBtn");

    noClicks++;

    const messages = [
        "¿Seguro? 😭 La hice con mucho cariño...",
        "Hirooooo, piénsalo otra vez JAJAJA 🥹",
        "Por favor léela aunque sea tantito. 💜",
        "Mira que ya invertí demasiadas horas en esto 😭",
        "Última oportunidad... 👀❤️"
    ];

    message.textContent =
        messages[Math.min(noClicks - 1, messages.length - 1)];

    message.classList.remove("hidden");

    if (noClicks >= 3) {
        button.textContent = "OK, LA VOY A LEER 💜";
        button.onclick = irCarta;
    }
}


/* =====================================================
   IR A LA INTRO DE LA CARTA
===================================================== */

function irCarta() {

    mostrarPantalla("introCarta");

}


/* =====================================================
   EMPEZAR CARTA
===================================================== */

function empezarCarta() {

    mostrarPantalla("carta");

    paginaActual = 0;

    mostrarPagina();

}


/* =====================================================
   CARTA COMPLETA
   TODO EL TEXTO ESTÁ AQUÍ
===================================================== */

const paginasCarta = [

    {
        gif: "carta11.gif",

        texto: `
            <p>
            Hiro, qué hermoso nombre. Nunca había escuchado un nombre tan lindo, de verdad. 🥹
            Bueno, en este escrito me gustaría hablar de ti, de todo lo que siento por ti y de muchas cosas más.
            </p>

            <p>
            Mira, yo nunca fui una experta en esto del amor.
            La verdad es que nunca me habían tratado tan bonito como tú lo haces,
            pero eso no fue lo que me enamoró de ti.
            </p>

            <p>
            Nooooo, por supuesto que no.
            Lo que realmente me enamoró de ti fue tu sonrisa tan linda.
            Desde el primer instante en que te vi fue como un:
            “Fuaaaaa, qué niño tan lindo”.
            </p>
        `
    },

    {
        gif: "carta3.gif",

        texto: `
            <p>
            Pero no te voy a mentir, cuando escuché tu edad, mi ilusión se fue un poquito,
            porque claro que existen niñas muchísimo más bonitas que yo y, además, de tu edad.
            </p>

            <p>
            En ese momento pensé:
            “Bueno, está muy lindo, le contaré a mi papá”.
            </p>

            <p>
            Y ahí es donde entra mi papá, porque él le contó a tu mamá.
            Supongo que ella estuvo de acuerdo, porque nunca pensé que incluso le cayera
            lo suficientemente bien como para confiar en mí y dejarme hablar con el hijo tan lindo que tiene.
            </p>

            <p>
            Después de eso pensé que probablemente no me ibas a hablar y que todo iba a quedar en un
            “lol, qué mal”.
            </p>

            <p>
            Pero no.
            Tú mandaste el primer mensaje y desde ese momento yo me sentí en las nubes,
            porque no podía creer que un niño tan simpático y lindo quisiera hablar conmigo.
            </p>
        `
    },

    {
        gif: "carta4.gif",

        texto: `
            <p>
            Poco a poco te fui conociendo: conocí tus gustos, tus disgustos,
            tus formas de pensar y muchísimas cosas más de ti.
            </p>

            <p>
            Y con cada hora, con cada mensaje y con cada conversación,
            me enamoraba e interesaba cada vez más por ti.
            </p>

            <p>
            Y siendo todavía más sincera, yo pensaba que un niño como tú nunca se fijaría en alguien como yo.
            </p>

            <p>
            Pero lo que terminó de enamorarme fueron tus chistes, tu energía,
            tu forma de ser y, básicamente, todo lo que te hace ser tú.
            </p>

            <p>
            Tus cumplidos hacia mí me dan una seguridad que no sé explicar.
            Eres como mi lugar seguro.
            </p>
        `
    },

    {
        gif: "carta5.gif",

        texto: `
            <p>
            Y luego llegó ese primer día en el que nos pusimos de acuerdo para vernos.
            </p>

            <p>
            Ese día estaba MUY nerviosa porque no sabía cómo actuar para que no pensaras que era rara.
            O sea, sí soy rara JAJAJA, pero no quería que se notara a simple vista. 😭
            </p>

            <p>
            Las horas se me hicieron eternas y rápidas al mismo tiempo.
            La verdad ni sé cómo explicarlo, pero en ningún momento me sentí incómoda ni fuera de lugar.
            </p>

            <p>
            Contigo tuve una fluidez que ni siquiera había tenido con algunas de mis mejores amistades.
            </p>
        `
    },

    {
        gif: "carta2.gif",

        texto: `
            <p>
            Yo estaba completamente enfocada en ti: en tus ojos, tus manos,
            tu cara tan bonita, tu voz, en todo.
            </p>

            <p>
            Ni siquiera me daba cuenta de la gente que estaba alrededor.
            </p>

            <p>
            En pocas palabras, cuando estoy contigo, nada ni nadie puede hacer
            que me fije en otra cosa que no seas tú.
            </p>

            <p>
            Y cuando llegaste con esas flores y ese pastel, me emocioné muchísimo.
            De verdad sentí que quería llorar de felicidad.
            </p>

            <p>
            Pero, aunque todo eso fue precioso, lo que más me importaba era estar abrazada de ti.
            </p>
        `
    },

    {
        gif: "carta6.gif",

        texto: `
            <p>
            Tus abrazos me dan un refugio, una seguridad y una sensación tan inexplicable
            que simplemente no quiero separarme de ti.
            </p>

            <p>
            Y eso es muy raro, porque a todo el mundo que me conoce y al que le preguntes
            te va a decir que yo no soy muy fan de estar pegada a alguien
            y mucho menos de estar abrazando a cada rato.
            </p>

            <p>
            Pero contigo es completamente diferente.
            Contigo podría pasar mil horas abrazada y nunca me cansaría ni querría separarme de ti. ❤️
            </p>

            <p>
            Y ese primer beso… WOOOOW.
            </p>

            <p>
            De verdad, si ya me sentía en las nubes, ese beso me hizo sentir todavía más feliz.
            </p>
        `
    },

    {
        gif: "carta7.gif",

        texto: `
            <p>
            Yo sinceramente pensaba que ni siquiera llegaríamos a un beso en el cachete,
            pero me di cuenta de que fue todo lo contrario.
            </p>

            <p>
            Y te juro que en ese momento sentí un millón de cosas al mismo tiempo.
            </p>

            <p>
            Y ni hablar de la primera vez que me dijiste “te quiero” y “te amo”.
            </p>

            <p>
            Probablemente te respondí con un simple “igual te amo”,
            “yo también te quiero” o con un “ayyyy”,
            pero la realidad es que dentro de mi cabeza estaban pasando un millón de emociones.
            </p>

            <p>
            Me puse tan feliz que hasta quería saltar de felicidad.
            </p>

            <p>
            Mi familia podía darse cuenta de lo feliz que estaba simplemente viendo mi sonrisa
            cuando aparecía tu nombre en mi teléfono o cuando mi hermana te mencionaba.
            </p>
        `
    },

    {
        gif: "carta8.gif",

        texto: `
            <p>
            Y bueno… escribiendo todo esto me entró una necesidad enorme de escribirte
            mil y una razones por las que te amo y por las que me encantas.
            </p>

            <p>
            Porque podría escribir páginas y páginas sobre ti y aun así sentiría
            que me faltan palabras para explicar todo lo que haces sentir en mí.
            </p>

            <p>
            Y si me pusiera a escribir una por una las razones por las que te amo,
            probablemente nunca terminaría.
            </p>

            <p>
            Porque no es solamente una cosa de ti la que me hace quererte tanto,
            son cientos de pequeños detalles que quizá para ti no significan demasiado,
            pero que para mí lo significan todo.
            </p>

            <p>
            Te amo por tu forma de hacerme sonreír incluso cuando no estoy teniendo el mejor día.
            Por tus chistes malos que, aunque a veces no quiera admitirlo,
            terminan haciéndome reír.
            </p>

            <p>
            Por la manera en la que me hablas, por cómo me miras,
            por cómo haces que me sienta especial sin siquiera intentarlo.
            </p>
        `
    },

    {
        gif: "carta9.gif",

        texto: `
            <p>
            Te amo por tu forma de ser tú.
            Por esas pequeñas cosas que haces sin darte cuenta.
            Por tus gestos, tus ocurrencias, tus palabras, tus caras,
            tus mensajes y hasta por esas cosas que probablemente tú consideras insignificantes.
            Yo me fijo en todo. 🥹
            </p>

            <p>
            Me encanta escucharte hablar de las cosas que te gustan,
            conocer tus pensamientos y descubrir poquito a poquito más partes de ti.
            </p>

            <p>
            Me encanta saber qué te hace feliz, qué te emociona,
            qué te da risa y hasta qué cosas te molestan.
            </p>

            <p>
            Porque cada cosa que conozco de ti hace que te quiera conocer todavía más.
            </p>

            <p>
            Y creo que una de las cosas más bonitas de haberte conocido
            es que contigo no siento que tenga que fingir ser alguien diferente.
            </p>
        `
    },

    {
        gif: "carta10.gif",

        texto: `
            <p>
            Puedo ser yo.
            Puedo decir tonterías, reírme demasiado, ponerme nerviosa,
            hacer caras raras, decir cosas sin sentido y ser completamente yo misma.
            </p>

            <p>
            Y aun así siento que me quieres y me aceptas tal como soy.
            Eso para mí vale muchísimo.
            </p>

            <p>
            También amo la tranquilidad que siento cuando estoy contigo.
            Es extraño explicar cómo una persona puede hacer que todo se sienta
            un poquito más tranquilo simplemente estando cerca.
            </p>

            <p>
            Pero tú lo haces.
            </p>

            <p>
            Cuando estoy contigo siento que puedo olvidarme por un momento de todo lo demás
            y simplemente disfrutar de estar a tu lado.
            </p>
        `
    },

    {
        gif: "carta15.gif",

        texto: `
            <p>
            Y quiero que sepas que cada momento contigo se queda guardado
            en un lugar muy especial de mí.
            </p>

            <p>
            Desde nuestras primeras conversaciones hasta cada vez que nos hemos visto,
            cada abrazo, cada risa, cada mirada y cada palabra bonita que me has dicho.
            </p>

            <p>
            Tal vez algún día olvidemos exactamente qué estábamos haciendo en algún momento,
            pero yo sé que nunca voy a olvidar cómo me hiciste sentir.
            </p>

            <p>
            Porque contigo he sentido una felicidad que no sabía que podía sentir por alguien.
            </p>

            <p>
            Y no quiero que pienses que solamente amo los momentos bonitos.
            También me importa conocerte cuando estás cansado,
            cuando estás de mal humor, cuando tienes un día difícil
            o cuando simplemente no tienes ganas de hablar.
            </p>
        `
    },

    {
        gif: "carta13.gif",

        texto: `
            <p>
            Porque no quiero conocer solamente la parte bonita de ti;
            quiero conocer a Hiro completo.
            </p>

            <p>
            Quiero estar para escucharte, para apoyarte, para hacerte reír cuando pueda
            y para recordarte que no tienes que cargar con todo tú solo.
            </p>

            <p>
            No sé qué nos tenga preparado el futuro.
            No sé cuántas cosas nos falten por vivir,
            cuántos lugares nos falten por conocer,
            cuántas fotografías nos falten por tomar
            o cuántas historias nos falten por crear.
            </p>

            <p>
            Pero sí sé algo: me hace muy feliz que,
            de todas las personas que existen en este mundo,
            nuestros caminos se hayan cruzado.
            </p>

            <p>
            Porque entre tantas personas, tantos lugares y tantos momentos,
            tuve la suerte de encontrarte a ti.
            </p>
        `
    },

    {
        gif: "carat14.gif",

        texto: `
            <p>
            Y si pudiera volver al primer día en el que te vi,
            sabiendo todo lo que iba a sentir después,
            probablemente volvería a elegir acercarme a ti una y otra vez.
            </p>

            <p>
            Volvería a emocionarme al recibir tu primer mensaje.
            </p>

            <p>
            Volvería a ponerme nerviosa antes de verte.
            </p>

            <p>
            Volvería a mirar tu sonrisa y pensar “qué niño tan lindo”.
            </p>

            <p>
            Volvería a sentir esos nervios del primer abrazo.
            </p>

            <p>
            Volvería a emocionarme por cada “te quiero”.
            </p>

            <p>
            Volvería a vivir cada uno de esos momentos.
            </p>
        `
    },

    {
        gif: "carta111.gif",

        texto: `
            <p>
            Porque todos ellos me llevaron hasta aquí,
            hasta este punto en el que puedo decirte que te quiero muchísimo
            y que eres una persona demasiado especial para mí.
            </p>

            <p>
            Y Hiro, quiero que nunca dudes de lo importante que eres para mí.
            </p>

            <p>
            No importa cuántas veces te lo diga,
            siempre voy a sentir que no es suficiente para explicar todo lo que siento.
            </p>

            <p>
            Pero aun así quiero seguir diciéndotelo.
            </p>

            <p>
            Quiero recordarte que te quiero, que me encantas,
            que me haces feliz, que me encanta tenerte en mi vida
            y que, entre todas las cosas bonitas que me han pasado,
            conocerte definitivamente está entre las más especiales.
            </p>
        `
    },

    {
        gif: "carta16.gif",

        texto: `
            <p>
            Te quiero por quien eres, por quien soy cuando estoy contigo
            y por todos esos pequeños momentos que hacen que nuestra historia sea nuestra.
            </p>

            <p>
            Y si esta carta empezó con una simple sonrisa que me pareció bonita,
            terminó convirtiéndose en una de las personas que más quiero.
            </p>

            <p>
            Qué bonito fue conocerte, Hiro.
            Y qué bonito es poder quererte. ❤️
            </p>
        `
    }

];


/* =====================================================
   SISTEMA DE PÁGINAS
===================================================== */

let paginaActual = 0;

function mostrarPagina() {

    const contenido =
        document.getElementById("letterContent");

    const gif =
        document.getElementById("letterGif");

    const contador =
        document.getElementById("pageCounter");

    const prev =
        document.getElementById("prevBtn");

    const next =
        document.getElementById("nextBtn");

    contenido.innerHTML = `
        <div class="letter-page">
            ${paginasCarta[paginaActual].texto}
        </div>
    `;

    gif.src = paginasCarta[paginaActual].gif;

    contador.textContent =
        `${String(paginaActual + 1).padStart(2, "0")} / ${String(paginasCarta.length).padStart(2, "0")}`;

    prev.style.visibility =
        paginaActual === 0 ? "hidden" : "visible";

    if (paginaActual === paginasCarta.length - 1) {

        next.textContent = "CONTINUAR 🎮";

    } else {

        next.textContent = "SIGUIENTE ▶";

    }

    crearDots();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function crearDots() {

    const dots =
        document.getElementById("pageDots");

    dots.innerHTML = "";

    paginasCarta.forEach((_, index) => {

        const dot =
            document.createElement("span");

        dot.className = "dot";

        if (index === paginaActual) {
            dot.classList.add("active");
        }

        dots.appendChild(dot);

    });

}


function paginaSiguiente() {

    if (paginaActual < paginasCarta.length - 1) {

        paginaActual++;

        mostrarPagina();

    } else {

        mostrarPantalla("juego");

        crearPuzzle();

    }

}


function paginaAnterior() {

    if (paginaActual > 0) {

        paginaActual--;

        mostrarPagina();

    }

}


/* =====================================================
   MINI PUZZLE 3x3
===================================================== */

/*
   Es un puzzle deslizante sencillo.
   El objetivo es ordenar los números del 1 al 8
   y dejar el espacio vacío al final.
*/

let puzzleState = [];
let movimientos = 0;

function crearPuzzle() {

    const puzzle =
        document.getElementById("puzzle");

    const moves =
        document.getElementById("moves");

    const message =
        document.getElementById("gameMessage");

    movimientos = 0;

    moves.textContent =
        "Movimientos: 0";

    message.textContent = "";

    /*
       Estado resuelto:
       1 2 3
       4 5 6
       7 8 vacío
    */

    puzzleState = [
        1, 2, 3,
        4, 5, 6,
        7, 8, 0
    ];

    /*
       Mezclamos haciendo movimientos válidos.
       Así siempre se puede resolver.
    */

    for (let i = 0; i < 35; i++) {

        const empty =
            puzzleState.indexOf(0);

        const posibles =
            obtenerMovimientos(empty);

        const random =
            posibles[
                Math.floor(Math.random() * posibles.length)
            ];

        [puzzleState[empty], puzzleState[random]] =
        [puzzleState[random], puzzleState[empty]];

    }

    dibujarPuzzle();

}


function obtenerMovimientos(posicion) {

    const movimientosPosibles = [];

    const fila =
        Math.floor(posicion / 3);

    const columna =
        posicion % 3;

    if (fila > 0) {
        movimientosPosibles.push(posicion - 3);
    }

    if (fila < 2) {
        movimientosPosibles.push(posicion + 3);
    }

    if (columna > 0) {
        movimientosPosibles.push(posicion - 1);
    }

    if (columna < 2) {
        movimientosPosibles.push(posicion + 1);
    }

    return movimientosPosibles;

}


function dibujarPuzzle() {

    const puzzle =
        document.getElementById("puzzle");

    puzzle.innerHTML = "";

    puzzleState.forEach((numero, index) => {

        const tile =
            document.createElement("button");

        tile.className = "puzzle-tile";

        if (numero === 0) {

            tile.classList.add("empty");

            tile.textContent = "";

        } else {

            tile.textContent = numero;

            tile.onclick = () => moverPieza(index);

        }

        puzzle.appendChild(tile);

    });

}


function moverPieza(index) {

    const empty =
        puzzleState.indexOf(0);

    const posibles =
        obtenerMovimientos(empty);

    if (!posibles.includes(index)) {
        return;
    }

    [puzzleState[index], puzzleState[empty]] =
    [puzzleState[empty], puzzleState[index]];

    movimientos++;

    document.getElementById("moves").textContent =
        `Movimientos: ${movimientos}`;

    dibujarPuzzle();

    comprobarPuzzle();

}


function comprobarPuzzle() {

    const correcto =
        puzzleState.every((numero, index) => {

            if (index === 8) {
                return numero === 0;
            }

            return numero === index + 1;

        });

    if (correcto) {

        document.getElementById("gameMessage").innerHTML =
            "✨ ARCHIVO RECONSTRUIDO ✨<br>Desbloqueaste el siguiente nivel. 💜";

        setTimeout(() => {

            mostrarPantalla("final");

        }, 1800);

    }

}


/* =====================================================
   BONUS
===================================================== */

function mostrarBonus() {

    mostrarPantalla("bonus");

}


/* =====================================================
   INICIAR
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    mostrarPantalla("inicio");

});