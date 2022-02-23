import './index.css'

const TabsListTab = props => {
  const {tabItem, onChangeActiveTabId, isActive} = props
  const {tabId, displayText} = tabItem

  const activeTab = isActive ? 'activeTab' : null

  const onClickTab = () => {
    onChangeActiveTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickTab}
        className={`tabButton ${activeTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsListTab
