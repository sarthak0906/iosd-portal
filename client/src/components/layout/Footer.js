import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
            <footer class="bg-primary" style={{marginTop: "40px",height:"20vh "}}>
            <div class="d-flex flex-row">
                <div class="d-flex flex-column mr-3">
                        <div class="card mt-4 ml-4 mr-2 mt-4 shadow" >
                            <div class="d-flex flex-row justify-content-start">
                                <div class="d-flex flex-column">
                                    <img class="img-fluid mt-3 ml-2" src="/img/2.PNG" alt="Card image cap"/>
                                </div>
                                <div class="flex-column">
                                    <div class="card-body" style={{fontSize: "10px"}}>
                                        <h5 class="card-title" style={{fontWeight:"bolder"}}>Vaibhav Mehra</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="d-flex flex-column mr-3" >
                        <div class="card mt-4 ml-4 mr-2 mt-4 shadow">
                            <div class="d-flex flex-row justify-content-start">
                                <div class="d-flex flex-column">
                                        <img class="img-fluid mt-3 ml-2" src="/img/3.PNG" alt="Card image cap"/>
                                </div>
                                <div class="d-flex flex-column">
                                    <div class="card-body" >
                                        <h5 class="card-title" style={{fontWeight:"bolder"}}>Vaibhav Mehra</h5>
                                        <p class="card-text" style={{fontSize: "10px"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="d-flex flex-column ml-1">
                        <div class="card mt-4 ml-4 mr-2 mt-4 shadow" >
                            <div class="d-flex flex-row justify-content-start">
                                <div class="d-flex flex-column">
                                        <img class="img-fluid mt-3 ml-2" src="/img/1.PNG" alt="Card image cap"/>
                                </div>
                                <div class="d-flex flex-column justify-content-start">
                                    <div class="card-body" style={{fontSize: "10px"}}>
                                        <h5 class="card-title" style={{fontWeight:"bolder"}}>Vaibhav Mehra</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
    </footer>
      </div>
    )
  }
}
