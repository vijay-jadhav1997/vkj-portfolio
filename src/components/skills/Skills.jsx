import './Skills.css';

import javascript from '../../assets/images/js.png'
import typescript from '../../assets/images/typescript.png'
import python from '../../assets/images/python.png'

import reactjs from '../../assets/images/reactjs.png'
import jest from '../../assets/images/jest.png'
import reduxjs from '../../assets/images/reduxjs.png'
import html5 from '../../assets/images/html-5.png'
import css3 from '../../assets/images/css-3.png'
import tailwindcss from '../../assets/images/Tailwind.png'
import bootstrap from '../../assets/images/bootstrap.png'
import materialui from '../../assets/images/materialui.png'

import nodejs from '../../assets/images/nodejs.jpg'
import express_js from '../../assets/images/express-js.png'
// import django from '../../assets/images/django2.png'
// import restframework from '../../assets/images/restframework.png'

import sql from '../../assets/images/sql.png'
// import postgresql from '../../assets/images/postgresql.png'
import mongodb from '../../assets/images/mongodb.png'
import redis from '../../assets/images/redis.png'
import firebase from '../../assets/images/firebase-logo.png'

import git from '../../assets/images/git.png'
import github from '../../assets/images/github.png'
import postman from '../../assets/images/postman.png'
import npm from '../../assets/images/npm.png'
import vite from '../../assets/images/vite.png'
import babel from '../../assets/images/babel.png'
import vscode from '../../assets/images/vs-code.png'
import markdown from '../../assets/images/markdown.png'
import codepen from '../../assets/images/codepen.png'

const Skills = () => {
  return (
    <section id='skills' className="skills">
      <h2 className='skills-heading'>My Web Development Skills</h2>
      <p className='skills-description'>Passionate about coding and web development, I thrive on exploring new technologies and AI tools.  For me, coding is not just a career path – it is a lifelong pursuit fueled by curiosity, innovation, and a love for problem-solving.</p>

      <div className="skills-container">
        <h3 className='skills-title'>Programming Languages</h3>
        <div className="languages">
          <div className="skill">
            <div className="img-wrapper">
              <img src={javascript} alt="Javascript" />
            </div>
            <h4>JavaScript</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={typescript} alt="Typescript" />
            </div>
            <h4>Typescript</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={python} alt="Python" />
            </div>
            <h4>Python</h4>
          </div>
        </div>

        <h3 className='skills-title'>Frontend Technologies</h3>
        <div className="frontend">
          <div className="skill">
            <div className="img-wrapper">
              <img src={html5} alt="HTML 5" />
            </div>
            <h4>HTML 5</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={css3} alt="CSS 3" />
            </div>
            <h4>CSS 3</h4>
          </div>
        
          <div className="skill">
            <div className="img-wrapper">
              <img src={reactjs} alt="React.js" />
            </div>
            <h4>React</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={jest} alt="Jest" />
            </div>
            <h4>Jest</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={reduxjs} alt="Redux.js" />
            </div>
            <h4>Redux</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={tailwindcss} alt="Tailwind CSS" />
            </div>
            <h4>Tailwind CSS</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={bootstrap} alt="Bootstrap" />
            </div>
            <h4>Bootstrap</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={materialui} alt="Materail UI" />
            </div>
            <h4>Material UI</h4>
          </div>
          
        </div>

        <h3 className='skills-title'>Backend Technologies</h3>
        <div className="backend">

          <div className="skill">
            <div className="img-wrapper">
              <img src={nodejs} alt="Node JS" />
            </div>
            <h4>Node.js</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={express_js} style={{backgroundColor: '#fff', padding: '2px', borderRadius: '5px'}} alt="Express JS" />
            </div>
            <h4>Express.js</h4>
          </div>
          
        </div>

        <h3 className='skills-title'>Database</h3>
        <div className="database">
          <div className="skill">
            <div className="img-wrapper">
              <img src={mongodb} alt="MongoDB" />
            </div>
            <h4>MongoDB</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={firebase} alt="Firebase" />
            </div>
            <h4>Firebase</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={redis} alt="Redis" />
            </div>
            <h4>Redis</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={sql} style={{ borderRadius: '5px'}} alt="SQL" />
            </div>
            <h4>SQL</h4>
          </div>
        </div>

        <h3 className='skills-title' >Other</h3>
        <div className="other" >
          <div className="skill">
            <div className="img-wrapper">
              <img src={git} alt="Git" />
            </div>
            <h4>Git</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={github} alt="GitHub" />
            </div>
            <h4>GitHub</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={postman} alt="Postman" />
            </div>
            <h4>Postman</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={npm} alt="npm" />
            </div>
            <h4>npm</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={vite} alt="vite" />
            </div>
            <h4>vite</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={babel} alt="babel" />
            </div>
            <h4>Babel</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={vscode} alt="vs code" />
            </div>
            <h4>vs code</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={markdown} alt="Markdown " />
            </div>
            <h4>Markdown</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={codepen} alt="Codepen " />
            </div>
            <h4>Codepen</h4>
          </div>
        </div>
      </div>
      
      <div className="skills-slider1" style={{'--item-width': '125px', '--item-height': '120px', '--quantity': '25'}}>
        <div className="list">
          <span className="item" style={{'--position': '1'}}>JavaScript</span>
          <span className="item" style={{'--position': '2'}}>TypeScript</span>
          <span className="item" style={{'--position': '3'}}>Python</span>
          <span className="item" style={{'--position': '4'}}>HTML</span>
          <span className="item" style={{'--position': '5'}}>CSS</span>
          <span className="item" style={{'--position': '6'}}>React.js</span>
          <span className="item" style={{'--position': '7'}}>Jest</span>
          <span className="item" style={{'--position': '8'}}>Redux.js</span>
          <span className="item" style={{'--position': '9'}}>Tailwind CSS</span>
          <span className="item" style={{'--position': '10'}}>Bootstrap</span>
          <span className="item" style={{'--position': '11'}}>Material UI</span>
          <span className="item" style={{'--position': '12'}}>Node.js</span>
          <span className="item" style={{'--position': '13'}}>Express.js</span>
          <span className="item" style={{'--position': '14'}}>MongoDB</span>
          <span className="item" style={{'--position': '15'}}>Firebase</span>
          <span className="item" style={{'--position': '16'}}>Redis</span>
          <span className="item" style={{'--position': '17'}}>SQL</span>
          <span className="item" style={{'--position': '18'}}>Git</span>
          <span className="item" style={{'--position': '19'}}>GitHub</span>
          <span className="item" style={{'--position': '20'}}>Postman</span>
          <span className="item" style={{'--position': '21'}}>npm</span>
          <span className="item" style={{'--position': '22'}}>vite</span>
          <span className="item" style={{'--position': '23'}}>Babel</span>
          <span className="item" style={{'--position': '24'}}>vs code</span>
          <span className="item" style={{'--position': '25'}}>Markdown</span>
        </div>
      </div>

      <div className="skills-slider2" style={{'--item-width': '50px', '--item-height': '250px', '--quantity':'25'}}>
        <div className="list">
          <div className="item" style={{'--position': '1'}}><img src={javascript} alt="Javascript" /></div>
          <div className="item" style={{'--position': '2'}}><img src={typescript} alt="Typescript" /></div>
          <div className="item" style={{'--position': '3'}}><img src={python} alt="Python" /></div>
          <div className="item" style={{'--position': '4'}}><img src={html5} alt="HTML" /></div>
          <div className="item" style={{'--position': '5'}}><img src={css3} alt="CSS" /></div>
          <div className="item" style={{'--position': '6'}}><img src={reactjs} alt="react js" /></div>
          <div className="item" style={{'--position': '7', borderRadius: '5px'}}><img src={jest} alt="jest" /></div>
          <div className="item" style={{'--position': '8'}}><img src={reduxjs} alt="redux js" /></div>
          <div className="item" style={{'--position': '9'}}><img src={tailwindcss} alt="Tailwind CSS" /></div>
          <div className="item" style={{'--position': '10'}}><img src={bootstrap} alt="Bootstrap" /></div>
          <div className="item" style={{'--position': '11'}}><img src={materialui} alt="Material UI" /></div>
          <div className="item" style={{'--position': '12'}}><img src={nodejs} alt="Node JS" /></div>
          {/* <div className="item" style={{'--position': '13'}}><img src={express_js} alt="Express JS" /></div> */}
          <div className="item" style={{'--position': '13', backgroundColor: '#fff', padding: '2px', borderRadius: '5px'}}><img src={express_js} alt="npm" /></div>
          <div className="item" style={{'--position': '14'}}><img src={mongodb} alt="MongoDB" /></div>
          <div className="item" style={{'--position': '15'}}><img src={firebase} alt="Firebase" /></div>
          <div className="item" style={{'--position': '16'}}><img src={redis} alt="Redis" /></div>
          <div className="item" style={{'--position': '17'}}><img src={sql} alt="SQL" /></div>
          {/* <div className="item" style={{'--position': '13'}}><img src={postgresql} alt="Postgra SQL" /></div> */}
          <div className="item" style={{'--position': '18', backgroundColor: '#fff', padding: '2px', borderRadius: '5px'}}><img src={git} alt="Git" /></div>
          <div className="item" style={{'--position': '19', backgroundColor: '#fff', padding: '2px', borderRadius: '5px'}}><img src={github} alt="GitHub" /></div>
          <div className="item" style={{'--position': '20'}}><img src={postman} alt="Postman" /></div>
          <div className="item" style={{'--position': '21', backgroundColor: '#fff', padding: '2px', borderRadius: '5px'}}><img src={npm} alt="npm" /></div>
          <div className="item" style={{'--position': '22'}}><img src={vite} alt="vite" /></div>
          <div className="item" style={{'--position': '23'}}><img src={babel} alt="babel" /></div>
          <div className="item" style={{'--position': '24'}}><img src={vscode} alt="vs code" /></div>
          <div className="item" style={{'--position': '25'}}><img src={markdown} alt="markdown" /></div>
        </div>
      </div>
      
    </section>
  )
}


export default Skills;