import { data } from "./Card.astro";

<Fragment>
<section>
{data.map(resp => (
<Fragment><div class="cardsContainer">
<b>{resp.id}</b>
<h3>{resp.title}</h3>
<img src={resp.img} alt="ticket" />
<ul>{resp.info}</ul>
<button>COMPRAR TICKET</button>

</div></Fragment>))}
</section>
</Fragment>;
