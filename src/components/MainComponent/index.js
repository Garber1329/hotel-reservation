import React from "react";
import {connect} from "react-redux";
import Loading from "../Loading";
import {fetchRooms, fetchReservation, postReservation, fetchCFMessages, postCFMessage} from "../../store/actionCreators";
import Header from "../Header";
import AppRouter from "../../router/AppRouter";
import Footer from "../Footer";

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        reservation: state.reservation,
        messages: state.messages
    }
}

const mapDispatchToProps = dispatch => ({
    postReservation: (newReservation) => dispatch(postReservation(newReservation)),
    postCFMessage: (name, email, message) => dispatch(postCFMessage(name, email, message)),
    fetchRooms: () => { dispatch(fetchRooms())},
    fetchReservation: () => {dispatch(fetchReservation())},
    fetchCFMessages: () => {dispatch(fetchCFMessages())}
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
        this.props.fetchRooms();
        this.props.fetchReservation();
        this.props.fetchCFMessages();
    }

    render() {
        return (
            <CheckProps props={this.props}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);