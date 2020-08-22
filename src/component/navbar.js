
class NavBar extends HTMLElement{
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

        nav {
            margin-top: 2em;
            z-index: 999;
            position: absolute;
            left: 70%;
            top: 0;
        }
        
        .navbar-ul {
            list-style-type: none;
            position: relative;
            margin:0;
            float: right;
            padding: 0;
            overflow: hidden;
        }
        
        .navbar-list {
            position: relative;
            top: 2%;
            display: inline-block;
        }
        
        .navbar-list a {
            display: block;
            color: #191a39;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        .navbar-list a.active {
            background-color: #F35D91;
            color: #fff;
            padding: 8px 10px;
            border-radius: 10px 10px;
        }

        
        @media only screen and (max-width: 450px) {

            nav {
                visibility: hidden;
            }
        }

        @media only screen and (max-width: 780px) {
            nav {
                left: 25%;
            }
        }

    
        @media only screen and (min-width: 900px) {
            nav {
                left: 58%;
            }
        }

        @media only screen and (min-width: 1050px) {
            nav {
                left: 70%;
            }
        }
        </style>
        <nav>
            <ul class="navbar">
                <li class="navbar-list"><a href="#" class="active">Home</a></li>
                <li class="navbar-list"><a href="#">Profile</a></li>
                <li class="navbar-list"><a href="#">Article</a></li>
                <li class="navbar-list"><a href="#">About Us</a></li>
            </ul>
        </nav>
        `
    }
}

customElements.define('nav-bar', NavBar);