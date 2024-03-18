import { Fragment } from "react";

function Skills()
{
  const redirection = (url: string) =>
  {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir ouvrir ce lien ?");
    if (confirmation) window.open(url, '_blank');
  }

  return (
    <Fragment>
      <span className="Title -big -bold">Mes compétences</span>

      <div className="Skills mt-4 mb-2 mr-5 ml-5">
        <div>
          <span className="Skills_skillTitle mb-4">Language de programmation</span>
          <div className="Skills_skillGrid mb-4">

            {/* Java */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.java.com/fr/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/java.png" alt="Java"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Java</span>
            </div>
            {/* ---- */}

            {/* Python */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.python.org/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/python.png" alt="Python"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Python</span>
            </div>
            {/* ------ */}

            {/* C# */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://dotnet.microsoft.com/en-us/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/csharp.png" alt="C#"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">C#</span>
            </div>
            {/* -- */}

            {/* HTML */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://developer.mozilla.org/fr/docs/Web/HTML")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/html-5.png" alt="HTML"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">HTML</span>
            </div>
            {/* -- */}

            {/* CSS */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://developer.mozilla.org/fr/docs/Web/CSS")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/css-3.png" alt="CSS"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">CSS</span>
            </div>
            {/* ---- */}

            {/* SCSS */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://sass-lang.com/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/sass.png" alt="SASS"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">SCSS</span>
            </div>
            {/* ---- */}

            {/* Javascript */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://developer.mozilla.org/fr/docs/Web/Javascript")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/javascript.png" alt="Javascript"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Javascript</span>
            </div>
            {/* ---- */}

            {/* Typescript */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.typescriptlang.org/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/typescript.png" alt="Typescript"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Typescript</span>
            </div>
            {/* ---- */}

            {/* SQL */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://sql.sh/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/database.png" alt="SQL"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">SQL</span>
            </div>
            {/* --- */}

            {/* Rust */}
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.rust-lang.org/fr")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/rust.png" alt="Rust"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Rust</span>
            </div>
            {/* ---- */}

          </div>
        </div>

        <div>
          <span className="Skills_skillTitle mb-4">Framework</span>
          <div className="Skills_skillGrid mb-4">
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://symfony.com/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/symfony.png" alt="Symfony"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Symfony</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://fr.legacy.reactjs.org/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/reactjs.png" alt="React"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">ReactJS</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://vitejs.dev/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/lang/vitejs.png" alt="Vite"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">ViteJS</span>
            </div>
          </div>
        </div>

        <div>
          <span className="Skills_skillTitle mb-4">Logiciels</span>
          <div className="Skills_skillGrid mb-4">

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.jetbrains.com/fr-fr/idea/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/idea.ico" alt="Intellij IDEA"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Intellij IDEA</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.jetbrains.com/fr-fr/phpstorm/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/phpstorm.ico" alt="PhpStorm"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">PhpStorm</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.jetbrains.com/fr-fr/rider/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/rider.ico" alt="Rider"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Rider</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.jetbrains.com/fr-fr/rust/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/rustrover.ico" alt="RustRover"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">RustRover</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.jetbrains.com/fr-fr/webstorm/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/webstorm.ico" alt="WebStorm"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">WebStorm</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://code.visualstudio.com/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/vscode.svg" alt="VSCode"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Visual Studio Code</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://sqlitebrowser.org/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/software/sqlitebrowser.svg" alt="DB Browser SQLite"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">DB Browser SQLite</span>
            </div>

          </div>
        </div>

        <div>
          <span className="Skills_skillTitle mb-4">Services - Outils</span>
          <div className="Skills_skillGrid mb-4">
            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.mysql.com/fr/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/service/mysql.png" alt="MySQL"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">MySQL</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://www.docker.com/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/service/docker.png" alt="Docker"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Docker</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://git-scm.com/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/tool/git.png" alt="Git"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Git</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://github.com/")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/service/github.png" alt="Github"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">Github</span>
            </div>

            <div className="Skills_skillGrid_skillLPCard" onClick={() => redirection("https://nodejs.org/en")}>
              <img className="Skills_skillGrid_skillLPCard_icon" src="/src/assets/images/tool/nodejs.png" alt="NodeJS"/>
              <div className="Skills_skillGrid_skillLPCard_hr"></div>
              <span className="Skills_skillGrid_skillLPCard_name">NodeJS</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Skills