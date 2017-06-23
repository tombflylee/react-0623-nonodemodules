import React from 'react';
import { Route,IndexRoute, IndexRedirect } from 'react-router';
import { browserHistory } from 'react-router';

import Container from '../Layouts/Containers'
import  Redux from '../components/Page/Redux/index'
import Main from '../Layouts/Main/index'

// const Redux = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../components/Page/Redux/index').default)
//     },'redux')
// }
//
// const Main = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Layouts/Main/index').default)
//     },'main')
// }
class result extends React.Component{
  render(){
    return(
      <Container>
        <Main>
          <Redux/>
        </Main>
      </Container>
    )
  }
}
export default(
  <Route path="/" component={result}>
	    {/* <Route path="/index" component={Main} >
          <Route path="/index/redux" component={Redux} />
      </Route> */}
	</Route>
)
{/* <Route path="/" component={Container}>
    <IndexRoute component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/index" onEnter={authRequired} getComponent={Main} >
          <IndexRedirect to="/index/redux" />
          <Route path="/index/redux" getComponent={Redux} />
          <Route path="/index/fetch" getComponent={Fetch} />
          <Route path="/index/empty" getComponent={Empty} />
        <Route path="/index/iconfont" getComponent={IconFont} />
        <Route path="/index/product" getComponent={Product}>
            <Route path="/index/product/think" getComponent={Think} />
            <Route path="/index/product/lenovo" getComponent={Lenovo} >
                <Route path="/index/product/lenovo/:productId" getComponent={ProductInfo} />
            </Route>
        </Route>
    </Route>
    <Route path="*" getComponent={NotFound} />
</Route> */}
