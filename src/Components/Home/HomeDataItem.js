import React, {Component} from 'react';


class HomeDataItem extends Component {
  render()  {
    return (
      <div>
        <h1 className="title">APPLICATION INFO</h1>
        <hr/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-4">
                <h3>App Name</h3>
                <h4 class="home-application-data">{this.props.homeApplicationData.appname}</h4>
              </div>
              <div className="col-xs-4">
                <h3>Cluster</h3>
                <h4 class="home-application-data">{this.props.homeApplicationData.hdfs_cluster}</h4>
              </div>
              <div className="col-xs-4">
                <h3>HDFS Root Directory</h3>
                <h4 class="home-application-data">{this.props.homeApplicationData.hdfs_root_dir}</h4>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-xs-4">
                <h3>App Owner</h3>
                <h4 class="home-application-data">{this.props.homeApplicationData.appowner}</h4>
              </div>
              <div className="col-xs-6">
                <h3>File Age</h3>
                <h4 class="home-application-data">{this.props.homeApplicationData.age}</h4>
              </div>
            </div>

            <br />

        </div>
      </div>

    );
  }
}

export default HomeDataItem;
