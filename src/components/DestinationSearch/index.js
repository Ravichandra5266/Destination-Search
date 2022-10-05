import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="card-head-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              onChange={this.searchInput}
              className="inputElement"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-logo"
              alt="search icon"
            />
          </div>
        </div>
        <ul className="card-content-direction">
          {searchResults.map(eachList => (
            <DestinationItem details={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
