import './index.css'

const SelectedTabsList = props => {
  const {each, updateMatchedImageId} = props
  const {id, thumbnailUrl, category} = each

  const onClickThumbnail = () => {
    updateMatchedImageId(id)

    console.log(id, ':of thumbnail image')
  }
  return (
    <li className="each-image-container">
      <button type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-url" />
      </button>
    </li>
  )
}

export default SelectedTabsList
