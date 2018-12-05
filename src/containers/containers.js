import { connect } from 'react-redux';
import Game from '../components/Game';

export default connect((state) => ({
    game: state.game,
}))(Game)