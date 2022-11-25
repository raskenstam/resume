
import { useState, useEffect } from "react";

const MainPage = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(darkMode.matches);
    setDark(darkMode.matches)
  }, []);

  return (
    <main>
      <div className="container">
        <h3>resume: <a href="link">download</a></h3>
        <h2>
          Roles
        </h2>
        <p>
          <b>Sep 2018 - Sep 2021</b>
          {" Full Stack: Have architected, developed, and shipped fullstack projects. Worked in small teams and followed tight deadlines."}
        </p>
        <p>
          <b>Since 2021 </b>
          Web3 and blockchain: Freelanced on multiple web3 blockchains and profficent with rust and webassembly.
        </p>
        <p>
          <b>Since 2020</b>
          {" Reverse engineer, created mods and hosted servers for various online games."}
        </p>
        <h2>
          Industry experiance
        </h2>
        <p>
          <b>Onlineklipp sep 2018 - sep 2019 </b>
          - Data engineer: Processed and Scraped large amounts of data using python
          - Full Stack: Built from the ground up with small team of developers. Worked on backend,frontend and cloud.
          Built on React Express Nodejs and MySQL
        </p>
        <p>
          <b> Aug 2020 - Oct 2021</b>
          - Front end: Web design and web development used standard frontend technologies such as Javascript HTML CSS
          and React Native
          - Data handling and databases: Improved and optimize REST API for retail and widget integration. Worked
          with Elastic, Mongodb, Javascript, MySql and Expres
        </p>
        <h2> Projects</h2>
        <p>
          • <b>bookbock</b>: Web hosted Book library built on ipfs used in large private gaming community. <br></br>
          • <b>Kevzter app</b>: Native android application for large streamer to manage community and giveaways.<br></br>
          • <b>secretsloth</b>: Peer to peer and decentralized web3 casino<br></br>
          • <b>secrettraders</b>: anonymous platform for trading virtual items<br></br>
          • <b>Various Social media automation</b>: Tools for handling and managing community and controlling large amount of
          accounts<br></br>
          • <b>3d party game servers</b>: Hosting,modding and upkeep on large 3d party servers for games<br></br>
          • <b>Telegram, Slack and Discord chat bots</b>: Chat bots for managing and providing various services to online
          communities
          <br></br>
          • <b>Poopshow Studios</b>: Created multiple mobile games for ios and android<br></br>
        </p>
      </div>
      <div className="container1">
        <div >
          <h2>Languages</h2>
          <div className="left-half">
            <h3>
              Rust
            </h3>
            <h3>
              Java
            </h3>
            <h3>
              Javscript
            </h3>
            <h3>
              Kotlin
            </h3>
            <h3>
              SQL
            </h3>
            <h3>
              C++
            </h3>
            <h3>
              Typescript
            </h3>
            <h3>
              SASS
            </h3>
          </div>
        </div>
        <div className="right-half">
          <h2>Technologies </h2>
          <div className="left-half">
            <h3> Express </h3>
            <h3> React</h3>
            <h3> Java</h3>
            <h3> Nodejs </h3>
            <h3> Express </h3>
            <h3> Nextjs </h3>
            <h3> Kubernetes</h3>
            <h3> Docker </h3>
            <h3> AWS</h3>
            <h3> Android Studio</h3>
            <h3> Elastic  </h3>
            <h3> Playwright</h3>
          </div>
        </div>
      </div>
      <nav>
        <button className="dark-mode-btn" onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
      </nav>
      <style jsx global>{`
              :root {
                
                --bg:${dark ? "black" : "white"};
                --text:${dark ? "white" : "black"};
              }
              body{
                background-color: var(--bg)  
                                          
              }
              main{
                
              }
              .container{
                display:flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;

              }
              h2{
              }
              p,h2,span{
                width: 50%;
              }
              p,h2,h1,h3{
                color: var(--text);
              }
              button{
                position: absolute;
                top: 1vh; right:1vw;
                background: none;
                color: inherit;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                outline: inherit;
                font-size: 30px;
              }

              .container1 {
                display: table;
                width: 50%;
                margin-left: 25%;
                margin-right: 25%;
              }
              .container1 > div {
                display: table-cell;
                width: 50%;
              }

              .left-half {
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                gap: 7px;
              }


              .left-half > h3{
                width: auto;
                margin-bottom: -16px;
                background-color: var(--boxBack);
                border: 1px solid var(--text);
                padding: 5px;
                font-size: small;
              }
              @media screen and (max-width: 992px) {
                main{
                  margin-left: 5%;
                  margin-right: 5%;
                }
                .container1{
                  width: 100%;
                  margin-left: 0%;
                  margin-right: 0%;
                }
                .container1 > div {
                  display:flex;
                  flex-wrap: wrap;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                }
                .right-half{
                  margin-top: 16px;
                }
                p,h2{
                width: 100%;
              }
              }
      `}</style>
    </main>
  )
};
export default MainPage
