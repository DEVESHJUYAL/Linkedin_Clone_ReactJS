import styled from "styled-components";
import MainContent from "./Main";
import SidebarRight from "./Rightside";
import SidebarLeft from "./Leftside";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <Wrapper>
      {!props.user && <Navigate to="/" />}
      <GridLayout>
        <SidebarLeft />
        <MainContent />
        <SidebarRight />
      </GridLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 8fr);
  gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
