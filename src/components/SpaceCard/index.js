import React from 'react'

const SpaceCard = ({ 
    spaceInfo: { 
        daily_price, 
        name, 
        address, 
        hourly_price, 
        square_footage, 
        capacity, 
        views_count, 
        primary_photo_css_url_small
    }
}) => {
    return (
        <div style={styles.Container}>
            <div style={styles.PriceContainer}>
                <div style={styles.PriceInnerContainer}>
                    <p style={styles.Price}>${daily_price}<span style={{fontSize: '12px'}}>/day</span></p>
                </div>
                <div style={styles.SpaceDetailsContainer}>
                    <p style={{fontWeight: 'bold'}}>{name}</p>
                    <p style={{fontSize: '12px'}}>{address}</p>
                    <p style={styles.SpaceDetails}>{hourly_price === null ? '' : `$${hourly_price}/hr /`} {square_footage}SqFt / {capacity} people</p>
                    <p style={styles.Views}>{views_count} Views</p>
                </div>
            </div>
            <img src={primary_photo_css_url_small} style={styles.Image} />
        </div>
    )
}

// All CSS would ideally be placed in a stylesheet!
const styles = {
    Container: {
        marginBottom: '15px', 
        width: '400px', 
        position: 'relative', 
        height: '400px'
    },
    PriceContainer: {
        border: '1px solid lightgray', 
        position: 'absolute', 
        bottom: '0px', 
        width: '100%', 
        backgroundColor: 
        'white', 
        height: '170px'
    },
    PriceInnerContainer: {
        position: 'relative'
    },
    Price: {
        fontSize: '18px', 
        fontWeight: 'bold', 
        position: 'absolute', 
        top: '-20px', 
        border: '1px solid lightgray', 
        borderRadius: '5px', 
        backgroundColor: 'white', 
        marginLeft: '10px', 
        padding: '2px 10px'
    },
    Views: {
        fontSize: '10px', 
        float: 'right', 
        marginRight: '10px'
    },
    SpaceDetailsContainer: {
        marginLeft: '10px', 
        marginTop: '20px'
    },
    SpaceDetails: {
        fontSize: '12px', 
        color: 'gray', 
        fontWeight: 'bold'
    },
    Image: {
        width: '100%'
    }
}

export default SpaceCard