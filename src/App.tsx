import Cards from "./components/cards";
import "./App.css";

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
                  imagem="../src/images/10.png"
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem="../src/images/13.png"
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem="../src/images/12.png"
                  nome="Batons Kisses Me"
                  valor={200}
                />
                            <Cards
                imagem="../src/images/11.png"
                nome="Batons Kisses Me"
                valor={200}
                            />
                
                            <Cards
                imagem="../src/images/3.png"
                nome="Batons Kisses Me"
                valor={200}
                            />
                
                
                            <Cards
                imagem="../src/images/8.png"
                nome="Batons Kisses Me"
                valor={200}
                />
                
                            <Cards
                imagem="../src/images/9.png"
                nome="Batons Kisses Me"
                valor={200}
                />
              </div>
            </div>

            <div className="prod_container">
              <p className="title_categ_prod">Iluminador</p>
              <div className="prod_iluminador">
                <Cards
                  imagem="../src/images/10.png"
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem="../src/images/13.png"
                  nome="Batons Kisses Me"
                  valor={200}
                />
                <Cards
                  imagem="../src/images/12.png"
                  nome="Batons Kisses Me"
                  valor={200}
                />
                            <Cards
                imagem="../src/images/11.png"
                nome="Batons Kisses Me"
                valor={200}
                            />
                
                            <Cards
                imagem="../src/images/3.png"
                nome="Batons Kisses Me"
                valor={200}
                            />
                
                
                            <Cards
                imagem="../src/images/8.png"
                nome="Batons Kisses Me"
                valor={200}
                />
                
                            <Cards
                imagem="../src/images/9.png"
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
