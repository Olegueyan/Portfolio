import { Fragment } from "react";
import BubbleCard from "../partial/BubbleCard.tsx";

/* Assets imports */

import * as assets from "../../assets/import.ts";

function Skills()
{
  return (
    <Fragment>
      <span className="Title -big -bold m-3">Mes compétences</span>

      <div>
        <span className="Title -medium -bold -left mb-4">
          Language de programmation
        </span>

        <div className="Grid mb-4">

          {/* Java */}
          <BubbleCard url="https://www.java.com/fr/"
                      icon={assets.imgJava}
                      name="Java" />
          {/* ---- */}

          {/* Python */}
          <BubbleCard url="https://www.python.org/"
                      icon={assets.imgPython}
                      name="Python" />
          {/* ------ */}

          {/* C# */}
          <BubbleCard url="https://dotnet.microsoft.com/en-us/"
                      icon={assets.imgCSharp}
                      name="C#" />
          {/* -- */}

          {/* HTML */}
          <BubbleCard url="https://developer.mozilla.org/fr/docs/Web/HTML"
                      icon={assets.imgHTML}
                      name="HTML" />
          {/* -- */}

          {/* CSS */}
          <BubbleCard url="https://developer.mozilla.org/fr/docs/Web/CSS"
                      icon={assets.imgCSS}
                      name="CSS" />
          {/* ---- */}

          {/* SCSS */}
          <BubbleCard url="https://sass-lang.com/"
                      icon={assets.imgSass}
                      name="SCSS" />
          {/* ---- */}

          {/* Javascript */}
          <BubbleCard url="https://developer.mozilla.org/fr/docs/Web/Javascript"
                      icon={assets.imgJavascript}
                      name="Javascript" />
          {/* ---- */}

          {/* Typescript */}
          <BubbleCard url="https://www.typescriptlang.org/"
                      icon={assets.imgTypescript}
                      name="Typescript" />
          {/* ---- */}

          {/* SQL */}
          <BubbleCard url="https://sql.sh/"
                      icon={assets.imgSQL}
                      name="SQL" />
          {/* --- */}

          {/* Rust */}
          <BubbleCard url="https://www.rust-lang.org/fr"
                      icon={assets.imgRust}
                      name="Rust" />
          {/* ---- */}

        </div>
      </div>

      <div>
        <span className="Title -medium -bold -left mb-4">
          Framework
        </span>

        <div className="Grid mb-4">

          {/* Symfony */}
          <BubbleCard url="https://symfony.com/"
                      icon={assets.imgSymfony}
                      name="Symfony" />
          {/* ------- */}

          {/* ReactJS */}
          <BubbleCard url="https://fr.legacy.reactjs.org/"
                      icon={assets.imgReactJS}
                      name="ReactJS" />
          {/* ------- */}

          {/* Symfony */}
          <BubbleCard url="https://vitejs.dev/"
                      icon={assets.imgViteJS}
                      name="ViteJS" />
          {/* ------- */}

        </div>
      </div>

      <div>
        <span className="Title -medium -bold -left mb-4">
          Logiciels
        </span>

        <div className="Grid mb-4">

          {/* IDEA */}
          <BubbleCard url="https://www.jetbrains.com/fr-fr/idea/"
                      icon={assets.imgIdea}
                      name="Intellij IDEA" />
          {/* ---- */}

          {/* PhpStorm */}
          <BubbleCard url="https://www.jetbrains.com/fr-fr/phpstorm/"
                      icon={assets.imgPhpStorm}
                      name="PhpStorm" />
          {/* -------- */}

          {/* Rider */}
          <BubbleCard url="https://www.jetbrains.com/fr-fr/rider/"
                      icon={assets.imgRider}
                      name="Rider" />
          {/* ----- */}

          {/* RustRover */}
          <BubbleCard url="https://www.jetbrains.com/fr-fr/rust/"
                      icon={assets.imgRustRover}
                      name="RustRover" />
          {/* --------- */}

          {/* DataGrip */}
          <BubbleCard url="https://www.jetbrains.com/fr-fr/datagrip/"
                      icon={assets.imgDataGrip}
                      name="DataGrip" />
          {/* -------- */}

          {/* VSCode */}
          <BubbleCard url="https://code.visualstudio.com/"
                      icon={assets.imgVSCode}
                      name="VSCode" />
          {/* ------ */}

          {/* Sqlite Browser */}
          <BubbleCard url="https://sqlitebrowser.org/"
                      icon={assets.imgSqliteBrowser}
                      name="DB Sqlite Browser" />
          {/* -------------- */}

        </div>
      </div>

      <div>
        <span className="Title -medium -bold -left mb-4">
          Services - Outils
        </span>

        <div className="Grid mb-4">

          {/* MySQL */}
          <BubbleCard url="https://www.mysql.com/fr/"
                      icon={assets.imgMysql}
                      name="MySQL" />
          {/* ----- */}

          {/* Docker */}
          <BubbleCard url="https://www.docker.com/"
                      icon={assets.imgDocker}
                      name="Docker" />
          {/* ------ */}

          {/* Git */}
          <BubbleCard url="https://git-scm.com/"
                      icon={assets.imgGit}
                      name="Git" />
          {/* --- */}

          {/* Github */}
          <BubbleCard url="https://github.com/"
                      icon={assets.imgGithub}
                      name="Github" />
          {/* ------ */}

          {/* NodeJS */}
          <BubbleCard url="https://nodejs.org/en"
                      icon={assets.imgNodeJS}
                      name="NodeJS" />
          {/* ------ */}

        </div>
      </div>
    </Fragment>
  )
}

export default Skills