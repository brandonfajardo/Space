import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSpaces } from '../../actions'
import { Container, Row, Col } from 'react-grid-system'
import SpaceCard from '../SpaceCard'


class SpaceList extends Component {
    componentWillMount() {
        this.props.getSpaces(1)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        const { spaceList, loading, error, page, getSpaces } = this.props
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50) && spaceList.length && !loading && !error) {
            getSpaces(page)
        }
      }

    render() {
        return (
            <div>
                {this.props.spaceList && this.props.spaceList.map((space, i) => (
                    <SpaceCard key={`space-card-${i}`} spaceInfo={space} />
                ))}
                {this.props.loading && <p>Loading...</p>}
            </div>
        )
    }
}

const mapState = ({ spaces: { loading, spaceList, page, error }}) => ({ loading, spaceList, page, error })
const mapDispatch = { getSpaces }

export default connect(mapState, mapDispatch)(SpaceList)