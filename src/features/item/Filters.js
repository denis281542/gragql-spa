export const Filters = () => {
    return(<div className="filters">
        <header className="filters__header">Фильтры</header>
        <div className="filters__list">
            <div className="filter__name">
                <label htmlFor="name" className="filter__name-label">
                    Название
                </label>
                <input id="name" className="filter__name-input" type="text"/>
                
            </div>

            <div className="filter__port">

            </div>

            <div className="filter__type">
                Тип 
                <input type="radio" id="contactChoice1" name="contact" value="email" />
                <label htmlFor="contactChoice1">Email</label>
                <input type="radio" id="2" name="2" value="2" />
                <label htmlFor="2">2</label>

            </div>
        </div>
    </div>)
}