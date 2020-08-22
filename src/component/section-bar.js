

class SectionBar extends HTMLElement {
    constructor() {
        super();
        this._shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDom.innerHTML = 
        `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            font-family: sans-serif;
            height: 100%;
            margin: 0;
        }

        #section-bar {
            background-image: url('../../../styles/slider.png');
            height: 100%;
            background-position: center top;
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            width:100%;
            top: 0;
            left: 0;
        }
        
        .h2-section {
            color: #F79119;
            position: relative;
            top: 17%;
            text-align: center;
            text-transform: uppercase;
            font-weight: bolder;
            font-size: 2.2em;
        }
        
        .p-section {
            top: 18%;
            width: 45%;
            position: relative;
            font-size: 2.2em;
            margin: 0 auto;
            font-weight: bolder;
            text-align: center;
            text-transform: uppercase;
        }
        
        .p-decs {
            width: 40%;
            top: 19%;
            position: relative;
            text-align: center;
            font-size: 1.2em;
            font-weight: normal;
            margin: 0 auto;
            color: #5EBBD3;
        }
        
        .info-section {
            top: 21%;
            display: block;
            position: relative;
            margin: 0 auto;
            background-color: #F35D91;
            border-radius: 10px;
            color: white;
            padding: 10px;
            font-weight: bold;
            border: none;
            text-transform: uppercase;
        }
        
        
        @media only screen and (max-width: 450px) {
            .p-section {
                width: 100%;
            }
            .p-decs {
                width: 100%;
            }
            #section-bar {
                background-position: top center;
            }
        
        }
        
        </style>
        <section>
        <div id="section-bar">
            <h2 class="h2-section">Selamat Datang</h2>
            <p class="p-section">Tetap Waspada dan Jaga Kesehatan!</p>
            <p class="p-decs">Kita harus bersama-sama bekerja sama untuk menekan laju pertumbuhan virus covid dan memutus mata rantai covid ini.</p>
            <button type="submit" class="info-section">Baca Selengkapnya</button>
        </div>
        </section>
        `
    }
}

customElements.define('section-bar', SectionBar);