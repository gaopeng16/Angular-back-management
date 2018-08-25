import {Component, Input, OnInit} from '@angular/core';
import {MenuData} from './main-model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  // 输入数据
  @Input() data: Array<MenuData>;

  // 所有数据
  private allData: Array<MenuData>;

  // 搜索文本
  searchTxt: string = '';

  // 搜索隐藏
  searchMsgHidden: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.allData = this.data;
  }

  /**
   * 是否有子节点(没有子节点返回true,)
   * @param item
   */
  isLeaf(item: MenuData) {
    return !item.children || !item.children.length;
  }

  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      for (let obj of this.data) {
        if (obj.id != item.id) {
          obj.isExpend = false;
        }
      }
      item.isExpend = !item.isExpend;
    }
  }

  /**
   * 查询菜单
   */
  searchMenu() {
    let tempData = this.allData;
    this.searchTxt = this.searchTxt.trim();
    this.searchMsgHidden = true;

    if ('' != this.searchTxt) {
      let keyWord = new RegExp(this.searchTxt);
      let menuList = new Array<MenuData>();
      let menuIdList = new Array<string>();

      for (let item of tempData) {
        this.searchItem(item, menuList, menuIdList, keyWord);
      }
      if (menuIdList.length > 0) {
        this.data = menuList;
      } else {
        this.searchMsgHidden = false;
      }
    } else {
      this.data = this.allData;
    }
  }

  /**
   * 查询子菜单
   * @param item
   * @param menuList
   */
  searchItem(item: MenuData, menuList: Array<MenuData>, menuIdList: Array<string>, keyWord: RegExp) {
    item.isExpend = false;
    // 关键字匹配，并且不在列表中的
    if ((item.name.match(keyWord) || item.keyWord.match(keyWord)) && !this.checcheckSearchMenuIdExists(item.id, menuIdList)) {
      menuList.push(item);
      this.pushSearchMenu(item, menuIdList);
    }

    // 存在子菜单的，递归子菜单
    let itemChildren = item.children;
    if (itemChildren && itemChildren.length > 0) {
      for (let subItem of itemChildren) {
        this.searchItem(subItem, menuList, menuIdList, keyWord);
      }
    }
  }

  /**
   * 添加查询的菜单
   * @param item
   * @param menuIdList
   */
  pushSearchMenu(item: MenuData, menuIdList: Array<string>) {
    menuIdList.push(item.id);
    let itemChildren = item.children;
    if (itemChildren && itemChildren.length > 0) {
      for (let subItem of itemChildren) {
        this.pushSearchMenu(subItem, menuIdList);
      }
    }
  }

  /**
   *
   * @param id 检查菜单id是否存在
   * @param menuIdList
   */
  checcheckSearchMenuIdExists(id, menuIdList: Array<string>) {
    for (let menuId of menuIdList) {
      if (menuId == id) {
        return true;
      }
    }
    return false;
  }

  /**
   * 查询输入
   * @param event
   */
  inputSearchTxt(event) {
    this.searchTxt = event.target.value;
  }

}
