import { connect } from "react-redux";
import Profile from "../../pages/Profile/Profile";

const mapStateToProps = (state) => ({
    userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);