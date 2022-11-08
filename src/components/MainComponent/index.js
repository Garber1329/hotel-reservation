import React from "react";
import {connect} from "react-redux";
/*import Loading from "../Loading";*/
import {fetchRooms, fetchReservation} from "../../store/actionCreators";
import Header from "../Header";
import AppRouter from "../../router/AppRouter";
import Footer from "../Footer";

const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        reservation: state.reservation
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRooms: () => { dispatch(fetchRooms())},
    fetchReservation: () => {dispatch(fetchReservation())}
});

const  CheckProps = (props) => {
    if (props.props.rooms.isLoading) {
        return(
            <div className="container">
                {/*<Loading/>*/}Loading...
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
        console.log(props.props)
        return (
            <div>
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>

        );
    }
}

class Main extends React.Component{
    componentDidMount() {
        this.props.fetchRooms();
        this.props.fetchReservation()
    }

    render() {
        return (
            <CheckProps props={this.props}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);