import React from "react";
import {connect} from "react-redux";
import Loading from "../Loading";
import {fetchRooms, fetchReservation, postReservation, fetchCFMessages, postCFMessage, fetchServices} from "../../store/actionCreators";
import Header from "../Header";
import AppRouter from "../../router/AppRouter";
import Footer from "../Footer";

const mapStateToProps = state => {
    return {
        reservation: state.reservation,
        rooms: state.rooms,
        messages: state.messages,
        services: state.services
    }
}

const mapDispatchToProps = dispatch => ({
    postReservation: (newReservation) => dispatch(postReservation(newReservation)),
    postCFMessage: (name, email, message) => dispatch(postCFMessage(name, email, message)),
    fetchReservation: () => {dispatch(fetchReservation())},
    fetchRooms: () => { dispatch(fetchRooms())},
    fetchCFMessages: () => {dispatch(fetchCFMessages())},
    fetchServices: () => {dispatch(fetchServices())}
});

const  CheckProps = (props) => {
    if (props.props.rooms.isLoading) {
        return(
            <div className="container">
                <Loading/>
            </div>
        );
    }
    else if (props.props.rooms.errMess ) {
        return(
            <div className="container">
                <h4>{props.props.rooms.errMess}</h4>
            </div>
        );
    }
    else  {
        return (
            <div className="wrapper">
                <Header/>
                <AppRouter props={props.props}/>
                <Footer/>
            </div>

        );
    }
}

class Main extends React.Component{
    componentDidMount() {
        this.props.fetchReservation();
        this.props.fetchRooms();
        this.props.fetchCFMessages();
        this.props.fetchServices()
    }

    render() {
        return (
            <CheckProps props={this.props}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);