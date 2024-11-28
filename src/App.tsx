import Cards from "./components/cards";
import "./App.css";

import p1 from '../src/images/10.png'
import p2 from '../src/images/11.png'
import p3 from '../src/images/12.png'
import p4 from '../src/images/13.png'
import p5 from '../src/images/8.png'
import p6 from '../src/images/9.png'
import p7 from '../src/images/3.png'


function App() {
  return (
    <>
      <header id="header">
        <div className="container-header">
          <h1 className="title">
            CATÁLOGO <br /> VIRTUAL
          </h1>
          <p className="param">
            MAQUIAGEM & <br /> VARIEDADES
          </p>
        </div>
      </header>

      <main>
        <section>
          <h2 className="subtitle">Produtos</h2>

          <div id="cards_container">

            {/* batons */}
            <div className="prod_container">
              <p className="title_categ_prod">Batons</p>
              <div className="prod_batons">
                <Cards
                  imagem={p1}
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem={p2}
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem={p3}
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem={p4}
                  nome="Batons Kisses Me"
                  valor={200}
                />

                <Cards
                  imagem={p5}
                  nome="Batons Kisses Me"
                  valor={200}
                />


                <Cards
                  imagem={p6}
                  nome="Batons Kisses Me"
                  valor={200}
                />

                <Cards
                  imagem={p7}
                  nome="Batons Kisses Me"
                  valor={200}
                />
              </div>
            </div>

            <div className="prod_container">
              <p className="title_categ_prod">Iluminador</p>
              <div className="prod_iluminador">
                <Cards
                  imagem={p1}
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem={p2}
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem={p3}
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem={p4}
                  nome="Batons Kisses Me"
                  valor={200}
                />

                <Cards
                  imagem={p5}
                  nome="Batons Kisses Me"
                  valor={200}
                />


                <Cards
                  imagem={p6}
                  nome="Batons Kisses Me"
                  valor={200}
                />

                <Cards
                  imagem={p7}
                  nome="Batons Kisses Me"
                  valor={200}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
