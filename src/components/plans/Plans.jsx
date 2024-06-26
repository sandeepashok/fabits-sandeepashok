import styled from '@emotion/styled/macro'
import { ReactComponent as FilterIcon } from '../../assets/plans/filter-alt.svg'
import { ReactComponent as ArrowRight } from '../../assets/plans/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../../assets/plans/arrow-left.svg'
import dropdownArrowSVG from '../../assets/plans/arrow-drop-down.svg'
import search from '../../assets/plans/search.svg'
import couple from '../../assets/plans/couple.svg'
import excellent from '../../assets/plans/excellent.svg'
import good from '../../assets/plans/good.svg'
import weak from '../../assets/plans/weak.svg'
import poor from '../../assets/plans/poor.svg'
import Epointer from '../../assets/plans/excellent-pointer.svg'
import Gpointer from '../../assets/plans/good-pointer.svg'
import Wpointer from '../../assets/plans/weak-pointer.svg'
import Ppointer from '../../assets/plans/poor-pointer.svg'
import Rpointer from '../../assets/plans/reached-pointer.svg'
import { ReactComponent as FilterMobile } from '../../assets/plans/filter-mobile.svg'
import PlanCard from './PlanCard'
import { v4 as uuidv4 } from 'uuid';

const PlansContainer = styled.div`
  min-width: 300px;
  margin: 24px 48px;
  padding: 32px;
  border-radius: 32px;
  background-color: #FFFFFF;
  border: 1px solid #D3DBEC;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-top: 8px;
    padding: 0;
    border-radius: 0;
  }
`
const HeadingAndFiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #D3DBEC;
  @media (max-width: 1360px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Heading = styled.b`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  @media (max-width: 1034px) and (min-width: 364px) {
    margin-bottom: 16px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin: 24px 16px;
  }
`
const FiltersAndSearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1360px) and (min-width: 1034px) {
    justify-content: end;
  }
  @media (max-width: 1034px) and (min-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`
const Filters = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #41558D;
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
  margin-right: 24px;
  cursor: pointer;
  & > svg {
    margin-left: 2px;
  }
  @media (max-width: 1034px) {
    display: none;
  }
`

const FiltersMobile = styled.button`
  display: none;
  @media (max-width: 1034px) {
    display: flex;
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    margin-left: 16px;
    & > svg {
      border-radius: 50%;
      background-color: transparent;
    }
  }
`

const SortByContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #727272;
  @media (max-width: 1034px) {
    display: none;
  }
`
const SortBy = styled.select`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #41558D;
  cursor: pointer;
  background-image: url(${dropdownArrowSVG});
  background-repeat: no-repeat;
  background-position: center right 3px;
  margin-right: 24px;
  @media (max-width: 1034px) {
    display: none;
  }
`
const Option = styled.option`
  
`

const SearchBar = styled.input`
  width: 246px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #D3DBEC;
  padding: 8px 8px 8px 44px;
  font-size: 16px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center left 10px;
  background-size: 26px;
  color: #41558D;
  &::placeholder{
    color: #A8B1CB;
  }
  @media (max-width: 768px) {
    width: 272px;
  }
`
const PlanCardsContainer = styled.div`
  display: grid;
  gap: 24px;
  padding: 24px 0;
  place-self: center;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1870px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1512px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1152px) {
    grid-template-columns: 1fr;
  }
`
const PaginationIndicatorsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
const PaginationIndicators = styled.div`
  min-width: 234px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PaginationInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #727272;
;
`
const InfoSpan = styled.span`
  color: #2D2D2D;
`

const ArrowBtn = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const PlanCards = [
  {
    planName: "Dhairyadev & Sayali’s Vacation Plan",
    image: couple,
    goalProgress: "₹ 11,24,00,000",
    goalAmount: "₹ 15,00,00,000",
    goalDate: "March 2035",
    goalHealth: "Excellent!",
    goalHealthIcon: excellent,
    reached: false,
    status: "Goal ahead by 16 months",
    isBoostRequired: false,
    primaryColor: "#5B8350",
    secondaryColor: "#C5DEBD",
    pointer: Epointer,
    primaryPosition: 55.2,
    secondaryPosition: 83.6,
    pointerPosition: 83.6
  },
  {
    planName: "Dhairyadev & Sayali’s Vacation Plan",
    image: couple,
    goalProgress: "₹ 2,70,00,000",
    goalAmount: "₹ 5,00,00,000",
    goalDate: "Jan 2040",
    goalHealth: "Good",
    goalHealthIcon: good,
    reached: false,
    status: "On track",
    isBoostRequired: false,
    primaryColor: "#74A766",
    secondaryColor: "#C5DEBD",
    pointer: Gpointer,
    primaryPosition: 57.6,
    secondaryPosition: 1,
    pointerPosition: 57.6
  },
  {
    planName: "Dhairyadev & Sayali’s Vacation Plan",
    image: couple,
    goalProgress: "₹ 42,00,000",
    goalAmount: "₹ 1,00,00,000",
    goalDate: "March 2035",
    goalHealth: "Weak",
    goalHealthIcon: weak,
    reached: false,
    status: "Goal behind by 2 months",
    isBoostRequired: true,
    primaryColor: "#D99E16",
    secondaryColor: "#F7DA95",
    pointer: Wpointer,
    primaryPosition: 58.6,
    secondaryPosition: 68.4,
    pointerPosition: 58.6
  },
  {
    planName: "Dhairyadev & Sayali’s Vacation  Plan",
    image: couple,
    goalProgress: "₹ 11,24,00,000",
    goalAmount: "₹ 15,00,00,000",
    goalDate: "March 2035",
    goalHealth: "Poor",
    goalHealthIcon: poor,
    reached: false,
    status: "Goal behind by 18 months",
    isBoostRequired: false,
    primaryColor: "#E85D5D",
    secondaryColor: "#FFB9B9",
    pointer: Ppointer,
    primaryPosition: 32.9,
    secondaryPosition: 66.3,
    pointerPosition: 32.9
  },
  {
    planName: "Dhairyadev & Sayali’s Vacation Plan",
    image: couple,
    goalProgress: "₹ 11,24,00,000",
    goalAmount: "₹ 15,00,00,000",
    goalDate: "March 2035",
    goalHealth: null,
    goalHealthIcon: null,
    reached: true,
    status: "Goal reached 3 months ahead",
    isBoostRequired: false,
    primaryColor: "#3B4D80",
    secondaryColor: "#A8B1CB",
    pointer: Rpointer,
    primaryPosition: 81.2,
    secondaryPosition: 100,
    pointerPosition: 81.2
  }
]

const Plans = () => {
  return (
    <PlansContainer>
      <HeadingAndFiltersContainer>
        <Heading>Track current goals</Heading>
        <FiltersAndSearchBarContainer>
          <Filters>Filters<FilterIcon /></Filters>
          <SortByContainer>
            <Label htmlFor='sort-by'>Sort by:</Label>
            <SortBy name="sort-by" id='sort-by'>
              <Option value="high-to-low">Progress (High to Low)</Option>
              <Option value="low-to-high">Progress (Low to High)</Option>
            </SortBy>
            <SearchBar type='search' name='search' placeholder='Search' />
            <FiltersMobile><FilterMobile /></FiltersMobile>
          </SortByContainer>
        </FiltersAndSearchBarContainer>
      </HeadingAndFiltersContainer>
      <PlanCardsContainer>
        {PlanCards.map(cardData => <PlanCard key={uuidv4()} cardData={cardData} />)}
      </PlanCardsContainer>
      <PaginationIndicatorsContainer>
        <PaginationIndicators>
          <PaginationInfo>showing <InfoSpan>1-4</InfoSpan> of <InfoSpan>4</InfoSpan></PaginationInfo>
          <ArrowBtn><ArrowLeft /></ArrowBtn>
          <ArrowBtn><ArrowRight /></ArrowBtn>
        </PaginationIndicators>
      </PaginationIndicatorsContainer>
    </PlansContainer>
  )
}

export default Plans