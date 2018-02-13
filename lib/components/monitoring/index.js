import { connect } from 'react-redux'
import { monitoringIsAliveSelector } from 'monitoring-ui-store'
import MonitoringComponent from './monitoringComponent'

const mapStateToProps = (state) => {
    return {
        /* TODO: list properties with selectors */
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /* TODO: onClickOnMap, etc. */
    }
}

const Monitoring = connect(
    mapStateToProps,
    mapDispatchToProps
)(MonitoringComponent)

export default Monitoring
