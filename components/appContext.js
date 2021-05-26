import React, { Component } from 'react';

// first we will make a new context
const AppContext = React.createContext();

// Then create a provider Component
class AppProvider extends Component {
  state = {
    collapsed: false,
    secondCollapsed: false,
    viewMode: 'gridView',
    filter: { categories: [], viewMin: '0', viewMax: '250000000' },
  };

  setUser = user => {
    this.setState({ user });
  };

  switchCollapse = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  switchSecondColumn = () => {
    const { secondCollapsed } = this.state;
    this.setState({ secondCollapsed: !secondCollapsed });
  };

  setViewMode = viewMode => {
    this.setState({ viewMode });
  };

  setFilter = filter => {
    console.log(filter);
    this.setState({ filter });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.props,
          ...this.state,
          switchCollapse: this.switchCollapse,
          switchSecondColumn: this.switchSecondColumn,
          setViewMode: this.setViewMode,
          setFilter: this.setFilter,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

// then make a consumer which will surface it
const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer };
