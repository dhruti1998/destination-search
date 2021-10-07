// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInputVal: ''}

  getInputValue = event => {
    this.setState({searchInputVal: event.target.value})
  }

  render() {
    const {searchInputVal} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInputVal.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="searchInput-container">
            <input
              onChange={this.getInputValue}
              type="search"
              className="inputSearch"
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
