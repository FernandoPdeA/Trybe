import React from 'react';

class ImageProfile extends React.Component {

  funcExibeImage = () => {
    const { image, alt, exibeImage } = this.props;
    if (exibeImage) {
      return <img src={image} alt={alt} />
    } else {
      return <p>A imagem do perfil será carregada se o email estiver correto!</p>
    }
  };

  render() {
    return (
      <div className="imageProfile">
        {this.funcExibeImage()}
      </div>
    );
  }
}

export default ImageProfile;
