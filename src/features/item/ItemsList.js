import { ArrowIcon } from "./ArrowIcon"
import { Pagination } from "./Pagination"
import { useQuery, gql } from "@apollo/client";

export const ItemList = () => {
    

    return(<div className="item__inner">
        <header>
            <h1 className="item__header">SpaceX Ships</h1>
        </header>

        <ul className="item__list">
            <li className="item">
                <div className="item__title">
                    <h3>GO Ms Chief</h3>
                    <a href="#">
                        <ArrowIcon />
                    </a>
                </div>

                <div className="item__props">
                    <div className="item__prop">
                        <div className="prop-title">Тип</div>
                        <span>High Speed Craft</span>
                    </div>
                    
                    <div className="item__prop">
                        <div className="prop-title">Порт</div>
                        <span>Port Canaveral</span>
                    </div>
                </div>
                
            </li>
            
        </ul>
        
        {/* <ExchangeRates /> */}

        <Pagination />
    </div>)
}