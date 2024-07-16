import React from 'react'

class Experience extends React.Component {
  render() {
    return (
      <div className='experience' id='experience'>
        <h1>Experiênce</h1>
        <div className='timeline-items'>
          <div className='timeline-item'>
            <div className='timeline-dot'>
              <div className='timeline-date'>2018</div>
              <div className='timeline-content'>
                <h3>Escola</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ipsum dolorum quisquam, fuga error, at, dolor blanditiis dolorem accusamus explicabo iusto possimus quos. Blanditiis delectus sapiente temporibus, vel tempore incidunt?</p>
              </div>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-dot'>
              <div className='timeline-date'>2025</div>
              <div className='timeline-content'>
                <h3>Universidade</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ipsum dolorum quisquam, fuga error, at, dolor blanditiis dolorem accusamus explicabo iusto possimus quos. Blanditiis delectus sapiente temporibus, vel tempore incidunt?</p>
              </div>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-dot'>
              <div className='timeline-date'>2022</div>
              <div className='timeline-content'>
                <h3>Estágio em TI</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ipsum dolorum quisquam, fuga error, at, dolor blanditiis dolorem accusamus explicabo iusto possimus quos. Blanditiis delectus sapiente temporibus, vel tempore incidunt?</p>
              </div>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-dot'>
              <div className='timeline-date'>2023</div>
              <div className='timeline-content'>
                <h3>Desenvolvedor Front end</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ipsum dolorum quisquam, fuga error, at, dolor blanditiis dolorem accusamus explicabo iusto possimus quos. Blanditiis delectus sapiente temporibus, vel tempore incidunt?</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Experience