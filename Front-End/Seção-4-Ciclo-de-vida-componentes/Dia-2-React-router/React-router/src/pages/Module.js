import React, { Component } from 'react';
import './Module.css';

class Module extends Component {
  constructor(){
    super();

    this.state = {
      contentCourse: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    this.getContentCourse();
  }

  getContentCourse = async () => {
    const response = await fetch('https://inss-project.vercel.app/api/course');
    const content = await response.json();
    this.setState({
      contentCourse: content.course,
      isLoading: false
    })
     console.log(content.course)
  }

  render() {
    const { match: { params: { idDoModulo } } } = this.props;
    const { contentCourse, isLoading } = this.state;
    const contentModule = contentCourse.find((content) => content.id === idDoModulo)
    
    if(isLoading) return <h1>Carregando...</h1>

    return (
      <main className="Module">
        { contentModule.description  }
      </main>
    );
  }
}

export default Module