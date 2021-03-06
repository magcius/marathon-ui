import ajaxWrapper from "../helpers/ajaxWrapper";

import config from "../config/config";

import AppDispatcher from "../AppDispatcher";
import GroupsEvents from "../events/GroupsEvents";

var GroupsActions = {
  createGroup: function (newGroupAttributes) {
    this.request({
      method: "POST",
      data: newGroupAttributes,
      url: `${config.apiURL}v2/groups`
    })
      .success(function (group) {
        AppDispatcher.dispatch({
          actionType: GroupsEvents.CREATE_GROUP,
          data: group
        });
      })
      .error(function (error) {
        AppDispatcher.dispatch({
          actionType: GroupsEvents.CREATE_GROUP_ERROR,
          data: error
        });
      });
  },
  scaleGroup: function (groupId, scaleBy) {
    this.request({
      method: "PUT",
      data: {
        scaleBy: parseFloat(scaleBy)
      },
      headers: {
        "Content-Type": "application/json"
      },
      url: `${config.apiURL}v2/groups/${groupId}`
    })
      .success(function (deployment) {
        AppDispatcher.dispatch({
          actionType: GroupsEvents.SCALE_SUCCESS,
          data: deployment
        });
      })
      .error(function (error) {
        AppDispatcher.dispatch({
          actionType: GroupsEvents.SCALE_ERROR,
          data: error
        });
      });
  },
  deleteGroup: function (groupId) {
    this.request({
      method: "DELETE",
      url: `${config.apiURL}v2/groups/${groupId}`
    })
      .success(function (deployment) {
        AppDispatcher.dispatch({
          actionType: GroupsEvents.DELETE_SUCCESS,
          data: deployment
        });
      })
      .error(function (error) {
        AppDispatcher.dispatch({
          actionType: GroupsEvents.DELETE_ERROR,
          data: error
        });
      });
  },
  request: ajaxWrapper
};

export default GroupsActions;
