import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';
export default class TourList extends Component {
    state={
        tours: tourData
    };
    removeTour = id =>{
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !==id);
        this.setState({
            tours: sortedTours
        })
    };
    
    render() {
        const {tours} = this.state;
        return (        
            <section className="tourList">
            {
                this.state.tours.map(tour => <Tour  tour={tour} key={tour.id} 
                removeTour={this.removeTour}/>)
            }
            </section>)
};
}
