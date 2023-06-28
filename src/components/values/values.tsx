import { component$, useSignal } from '@builder.io/qwik';


type review = { heading: string; subheading: string; contenthead: string, content: string };

interface props {
    reviews: review[];
}
export const Values = component$((props: props) => {

    return (
        <div style={{ background: "rgb(34, 49, 106)" }}>
            <div>
                <h1 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>{props?.reviews[0]?.heading}</h1>
            </div>
            <div>
                <p style={{ textAlign: "center", color: "white", margin: "50px 50px" }}>{props?.reviews[0]?.content}</p>
            </div>

            <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "20px", margin: "50px 50px 50px 50px" }}>
                {props.reviews.map((review) => {
                    if (review?.contenthead?.length > 0) {
                        return <>
                            <div style={{ width: "25%", background: "white", padding: "2px 16px", borderRadius: "5px" }}>
                                <h3 style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "350" }}>{review.contenthead}</h3>
                                <p style={{ margin: "50px , 50px, 50px, 50px", color: "#2b292a" }}>{review.content}</p>
                            </div >

                        </>
                    } else { null }

                })}
            </div>




        </div >
    );
});
