import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import Loading from '../components/Loading';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const time = 1000;
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, time);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? (<Loading />) : (
          <>
            <Header />
            <WalletForm />
            <Table />
          </>)}
      </div>
    );
  }
}

export default Wallet;
