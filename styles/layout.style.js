import styled from "styled-components";


export const PageWrapper = styled.div`
    margin: 50px 0;
`

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 15px 15px;
    border-radius: 10px;
    border: 2px solid #F0EC57;
    font-size: 1.25rem;
    color: #0B0A07;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

`

export const SlugList = styled.ul`
    position: absolute;
    top: calc(100% + 10px);
    width: 100%;
    padding: 5px 15px;
    margin: 0;
    list-style: none;
    border: 2px solid #F0EC57;
    border-radius: 10px;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    :focus {
      outline: none;
    }
`

export const SlugItem = styled.li`
     :not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
`

export const AnchorTag = styled.a`
    
        display: block;
        text-decoration: none;
        color: #242424;
        font-weight: 500;
        transition: all 0.3s ease;
        width: 100%;
        padding: 10px 0;

        &:hover {
          color: #0B0A07;
          font-weight: 600;
          	
        }
      
`

export const PlacesWrapper = styled.div`
        margin-top: 50px;
        cursor: pointer;
`

export const PlacesRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`

export const PlacesBox = styled.div`
    flex: 0 0 25%;
    padding-left: 15px;
    padding-right: 15px;
`

export const PlacesImagesWrapper = styled.div`
    position: relative;
    padding-bottom: 125%;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
`

export const PlacesTitle = styled.div`
        text-decoration: none;
        font-weight: 600;
        color: #242424;
        font-size: 1.25rem;
        opacity: 0.9;
        text-align: center;
        transition: all 0.3s ease;
`

export const PlacesAnchorTag = styled.a`
      display: block;
      width: 100%;
      position: relative;
      text-decoration: none;
`

export const TodayWrapper = styled.div`
    background-color: #F0EC57;
    border-radius: 10px;
    color: #0B0A07;
    margin-top: 20px;
`

export const TodayInnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px;
    font-weight: 600;
`

export const AnchorHomeLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color: #0B0A07;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 15px;

    :hover {
      opacity: 0.7;
    }
`

export const TodayH1 = styled.h1`
    margin-bottom: 0;
    font-size: 2rem;
`

export const TodayH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 15px;
`

export const TodaySpan = styled.span`
      :last-child {
        margin-left: 10px;
        font-size: 1.25rem;
        opacity: 0.7;
      }
`

export const TodaySunTimes = styled.div`
    display: flex;
`

export const TodaySunSpan = styled.span`
    display: block;
`

export const TodayRightContent = styled.div`
    text-align: center;
    margin-left: 20px;
`

export const TodayIconWrapper = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    * > {
         position: absolute;
      top: 50%;
      left: 50%;
      width: 140px !important;
      height: 140px !important;
      transform: translate(-50%, -50%);
    }
    
`



export const HourlyWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  overflow: auto;
`

export const HourlyInner = styled.div`
    display: flex;
    font-weight: 600;
`

export const HourlyBoxWrapper = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 120px;
    padding-right: 10px;
    padding-right: 10px;
`

export const HourlyBoxInner = styled.div`
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    background-color: #E3D87E;
    color: #0B0A07;
`

export const WeeklyWrapper = styled.div`
    margin-top: 20px;
`

export const WeeklyTitle = styled.h3`
    opacity: 0.9;
    margin-bottom: 15px;
    font-size: 2rem;
`

export const WeeklyCard = styled.div`
    background-color: #BBCEA8;
    border-radius: 10px;
    color: #0B0A07;
        :not(:last-child) {
        margin-bottom: 15px;
    }

    
`

export const WeeklyInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`

export const WeeklyLeftContent = styled.div`
    display: flex;
    align-items: center;
    margin-left: -15px;
    margin-right: -15px;
`

export const WeeklySunTimes = styled.div`
    display: flex;
`

export const WeeklyRightContent = styled.div`
    text-align: center;
    margin-left: 20px;
    min-width: 120px;
`

export const WeeklyIconWrapper = styled.div`
    width: 60px;
    height: 60px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    > * {
        position: absolute; 
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      transform: translate(-50%, -50%);
    } 
`

export const WeeklyH5 = styled.h5`
      font-size: 1rem;
      margin-bottom: 0;
`



export const WeeklySpan = styled.span`
    display:block;
    font-weight: 700;
`

export const WeeklyH3 = styled.h3`
    margin-bottom: 0;
    font-size: 1.5rem;
`

export const WeeklyH4 = styled.h4`
    > * {
        &:last-child {
        margin-left: 10px;
        font-size: .875rem;
        opacity: .7;
    }
}
`

export const ReduxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`

export const ReduxInput = styled.input`
    width: 50%;
    padding: 10px 10px;
    border-radius: 10px;
    border: 2px solid #E3D87E;
    font-size: 1.1rem;
    color: #0B0A07;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`

export const ReduxButton = styled.button`
        background-color: #BB342F; 
        border: none;
        color: white;
        padding: 15px 32px;
        text-decoration: none;
        font-size: 16px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
`

export const AccessDeniedWrapper = styled.div`
      display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`

export const AccessDeniedInner = styled.div`
    display: flex;
    flex-direction: column;

`

export const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: space-between;
`

export const AnchorSignOut = styled.a`
    background-color: #BB342F;
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
`