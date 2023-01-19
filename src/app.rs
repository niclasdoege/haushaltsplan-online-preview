//#[macro_use] extern crate rocket;

//use std::error::Error;
use yew::prelude::*;
use yew_router::prelude::*;
use serde::{Deserialize, Serialize};
use chrono::{TimeZone, Duration, Local, Datelike, Timelike, Utc};
use yew::{html, Callback};
use gloo::console::{self, Timer};
use gloo::timers::callback::{Interval, Timeout};
//use std::time::{Duration, Instant};


//use futures::Future;
//use futures::FutureExt;

#[derive(Clone, PartialEq, Debug)]
struct ModalObj {
    modal_content:Html,
}
#[derive(Properties, PartialEq)]
pub struct ModalProps {
    #[prop_or_default]
    pub children: Children,
}

#[function_component(Modal)]
fn modal(ModalProps {children}: &ModalProps) -> Html {
    let modal_host = gloo::utils::document()
        .get_element_by_id("modal_host")
        .expect("Expected to find a #modal_host element");

    create_portal(
        html!{ {for children.iter()} },
        modal_host.into(),
    )
}

static name_list:[&str; 3] = ["niclas","marc","mikiya"];

#[derive(Properties, PartialEq)]
struct Model {
    // other fields here
    button_click_callback: Callback<usize>,
}


#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    NotFound,
    #[at("/secure")]
    Secure,
    #[not_found]
    #[at("/404")]
    Home,
}


#[function_component(Secure)]
fn secure() -> Html {
    let navigator = use_navigator().unwrap();

    let onclick = Callback::from(move |_| navigator.push(&Route::Home));
    html! {
        <div>
            <h1>{ "Secure" }</h1>
            <button {onclick}>{ "Go Home" }</button>
        </div>
    }
}


fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { 
            <App_main />
             },
        Route::Secure => html! {
            <Secure />
        },
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}

#[derive(Clone, PartialEq, Deserialize, Serialize, Debug)]
struct Table {
    marc: (String,String),
    mikiya: (String,String),
    niclas: (String,String),
    week: usize,
}


#[derive(Clone, PartialEq, Deserialize, Debug)]
struct LastDone {
    kitchen: String,
    doorway: String,
    bathroom: String,
    id: usize
}


#[derive(Properties, PartialEq)]
struct TablesListProps {
    tables: Vec<Table>,
    on_click: Callback<Table>
}

#[function_component(TablesList)]
#[allow(non_snake_case)]
fn Tables_list(TablesListProps { tables, on_click }: &TablesListProps) -> Html {
    let on_click = on_click.clone();
    tables.iter().map(|table| {
        let on_table_select = {
            let on_click = on_click.clone();
            let table = table.clone();
            Callback::from(move |_| {
                    on_click.emit(table.clone())
                })
            };
    
            html! {
                <p key={table.week} onclick={on_table_select}>{format!("week: {} mikiya: {} marc: {}, niclas:{}", table.week, table.mikiya.0, table.marc.0, table.niclas.0)}</p>
            }
        }).collect()
}

#[derive(Properties, PartialEq)]
struct NamesListProps {
    names: Vec<String>,
//    on_click: Callback<Table>
}

#[function_component(NamesList)]
#[allow(non_snake_case)]
fn Names_list(NamesListProps {names}: &NamesListProps) -> Html {
    //let on_click = on_click.clone();
    names.iter().map(|name| {
        let on_table_select = {
            //let on_click = on_click.clone();
            let name = name.clone();
            //Callback::from(move |_| {
            //        on_click.emit(table.clone())
            //    })
            };
    
            html! {
                <p>{format!("{}",name)}</p>
            }
        }).collect()
}

//name_list_yew_thingie: NamesListProps = new NamesListProps

use std::error::Error;

async fn send_postrequest_to_change_table_json(which_week: i64, who:&str) -> Result<(), Box<(dyn Error + 'static)>>{
    
        //let temp_date=format!("{:02}-{:02}-{}", date.day(), date.month(), date.year());
        //fourteen_days.push((temp_date, environment_of_the_fourteen_days[blah+9]));
    let date_today = Local::now();
    let string_date=format!("{:02}-{:02}-{}", date_today.month(), date_today.day(), date_today.year());
    //let mut when = "we";
    let mut whoelse = vec!["marc","niclas","mikiya"];
    //whoelse.remove_item(who);
    whoelse.retain(|x| *x != who);

    let mut what_to_tell_marc = String::from("0");
    let mut what_to_tell_mikiya = String::from("0");
    let mut what_to_tell_niclas = String::from("0"); 

    let mut marc_task = String::from("0");
    let mut mikiya_task = String::from("0");
    let mut niclas_task = String::from("0"); 

    match who {
        "marc" => {what_to_tell_marc=string_date;}
        "mikiya" => {what_to_tell_mikiya=string_date;}
        "niclas" => {what_to_tell_niclas=string_date;}
        &_ =>{what_to_tell_niclas="nein nein nein".to_string();}
    }

    for name in name_list.iter().cloned().cycle().skip(which_week as usize).take(1){
        match name {
            "marc" => {marc_task="kitchen".to_string();}
            "mikiya" => {mikiya_task="kitchen".to_string();}
            "niclas" => {niclas_task="kitchen".to_string();}
            &_ =>{"nein nein nein".to_string();}
        }
    }

    for name in name_list.iter().cloned().cycle().skip(which_week as usize +1).take(1){
        match name {
            "marc" => {marc_task="bathroom".to_string();}
            "mikiya" => {mikiya_task="bathroom".to_string();}
            "niclas" => {niclas_task="bathroom".to_string();}
            &_ =>{"nein nein nein".to_string();}
        }
    }

    for name in name_list.iter().cloned().cycle().skip(which_week as usize +2).take(1){
        match name {
            "marc" => {marc_task="doorway".to_string();}
            "mikiya" => {mikiya_task="doorway".to_string();}
            "niclas" => {niclas_task="doorway".to_string();}
            &_ =>{"nein nein nein".to_string();}
        }
    }

    let table = Table {
        marc: (what_to_tell_marc.to_string(), marc_task.to_string()),
        mikiya: (what_to_tell_mikiya.to_string(), mikiya_task.to_string()),
        niclas: (what_to_tell_niclas.to_string(), niclas_task.to_string()),
        week: which_week as usize,
    };

    let json = serde_json::to_string(&table)?;

    //let params: [((&str, String), (&str, String, String), (&str, String, String), (&str, String, String)); 1]= ((&"week".to_string(), which_week.to_string()), (who, (*string_date).to_string(),"kitchen".to_string()), (whoelse[0], "0".to_string(),"kitchen".to_string()), (whoelse[1], "0".to_string(),"kitchen".to_string());
    let response = reqwest::Client::new()
    .post("http://192.168.0.81:8000/tables")
    .header("Content-Type", "application/json")
    .body(json)
    .send()
    .await;
    //println!("Response status {}", response.status());

Ok(())
}

async fn send_pullrequest_for_table_json<'a>(tables:&'a UseStateHandle<Vec<Table>>)-> Result<(Vec<Table>,&'a UseStateHandle<Vec<Table>>), reqwest::Error>{
    let echo_json :Vec<Table>  = reqwest::Client::new()
        .get("http://127.0.0.1:8000/example.json")
        .send()
        .await?
        .json()
        .await?;

    println!("{:#?}", echo_json);
    //let tables: Vec<Table> = echo_json.json().await?;
     Ok((echo_json,tables))
}



#[function_component(Main)]
pub fn main() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} /> // <- must be child of <BrowserRouter>
        </BrowserRouter>
    }
}








use log::info;
use wasm_bindgen::JsValue;
//use wasm-logger;













async fn map_err_example<'a>( tables : &'a UseStateHandle<Vec<Table>>){
    let mut tables = tables.clone();
 // tables.set(send_pullrequest_for_table_json().await.unwrap());

}

fn smoothen(vec: Vec<(usize, usize, usize)>) -> Vec<(usize, usize, usize)> {
    let mut result = vec![];
    for (i, &(r, g, b)) in vec.iter().enumerate() {
        if r == 100 && g == 100 && b == 100 {
            result.push((100, 100, 100));
        } else {
            if i == 0 {result.push((0, 0, 0));}
            else if i + 1 < vec.len(){
            let (prev_r, prev_g, prev_b) = result[i - 1];
            let (next_r, next_g, next_b) = vec[i + 1];

            let mut m_r = 1;
            let mut d_r = 1;

            if prev_r != 0 {
                m_r=40;
                d_r=51
            
            }

            let mut m_g = 1;
            let mut d_g = 1;

            if prev_g != 0 {
                m_g=40;
                d_g=51
            
            }

            let mut m_b = 1;
            let mut d_b = 1;

            if prev_b != 0 {
                m_b=40;
                d_b=51
            
            }

            let mut r_value = (prev_r*m_r + next_r) /d_r;
            let mut g_value = (prev_g*m_g + next_g) / d_g;
            let mut b_value = (prev_b*m_b + next_b) / d_b;

            if r == 100{r_value=100;}
            if b == 100{b_value=100;}
            if g == 100{g_value=100;}
            result.push((r_value, g_value, b_value));
            }
        }
    }
    result
}




//static mut tables: Option<UseStateHandle<Vec<_>>> = None;


use gloo_net::http::Request;
//use pin_utils::pin_mut;
//use pin_utils::unpin;
//use std::marker::Unpin;
//use std::pin::Pin;
//use yew;

#[function_component(App_main)]
fn app_main() -> Html {



    

    let selected_table = use_state(|| None);
    let on_table_select = {
                let selected_table = selected_table.clone();
                Callback::from(move |table: Table| {
                    selected_table.set(Some(table))
                })
            };

 
    
/* 
    struct MyStruct {
        vec: UseStateHandle<Vec<Table>>
    }

    let mut tables:UseStateHandle<Vec<_>> = use_state(|| vec![]);
        pin_mut!(tables);
    //let mut tables: Vec<Table>= vec![];
    //let tables = tables.clone();
    //wasm_bindgen_futures::spawn_local(map_err_example(&tables));
    //wasm_bindgen_futures::spawn_local(send_postrequest_to_change_table_json());
    //wasm_bindgen_futures::spawn_local(send_pullrequest_for_table_json(&mut &tables));
//use_effect_with_deps(move |_| {
    
wasm_bindgen_futures::spawn_local(send_pullrequest_for_table_json( &mut tables).then(move |result| async move {
    //let  &mut tables = &mut tables.clone();
    
    match result {
        Ok(value) => {
            //let tables = tables.clone();
            //tables=value;
            &mut value.1.set(value.0);
            
        },
        Err(err) => {
            // handle the error
        }
    }
    //drop(tables);
    //Unpin(tables);
}));

//tables = tables.clone(); 
//let my_struct = MyStruct { vec: tables };
*/
        let zustande = use_state(|| vec![]);
    {
        let zustande = zustande.clone();
        use_effect_with_deps(move |_| {
            let zustande = zustande.clone();
            wasm_bindgen_futures::spawn_local(async move {
                let fetched_states: Vec<LastDone> = Request::get("http://192.168.0.81:8000/zustande.json")
                    .send()
                    .await
                    .unwrap()
                    .json()
                    .await
                    .unwrap();
                zustande.set(fetched_states);
                println!("{:#?}",zustande);
                println!("ghrghr");
                println!("ghrghr");
                println!("ghrghr");
                //let object = JsValue::from(tables);
                //info!("Hello {:#?}", zustande);
            });
            || ()
        }, ());
    }
    info!("zustande {:#?}", zustande);


 

    let tables = use_state(|| vec![]);
    {
        let tables = tables.clone();
        use_effect_with_deps(move |_| {
            let tables = tables.clone();
            wasm_bindgen_futures::spawn_local(async move {
                let fetched_tables: Vec<Table> = Request::get("http://192.168.0.81:8000/example.json")
                    .send()
                    .await
                    .unwrap()
                    .json()
                    .await
                    .unwrap();
                tables.set(fetched_tables);
                println!("{:#?}",tables);
                println!("ghrghr");
                println!("ghrghr");
                println!("ghrghr");
                //let object = JsValue::from(tables);
                //info!("Hello {:#?}", tables);
            });
            || ()
        }, ());
    }
    //info!("Hello {:#?}", tables);
    //wasm_bindgen_futures::spawn_local(send_postrequest_to_change_table_json());

    
    

    //let name_list = ["niclas","marc","mikiya"];
    let start_time = Local.ymd(2023, 01, 01).and_hms(08, 00, 0);
    let date_today = Local::now();
    let weeks_elapsed;
    let days_elapsed;

    if date_today>start_time{
        weeks_elapsed = (date_today-start_time).num_weeks();
        days_elapsed = (date_today-start_time).num_days();
    }
    else {
        weeks_elapsed = 0;
        days_elapsed = 0;
    }

    let mut environment_of_the_fourteen_days:Vec<(usize,usize,usize)> = Vec::new();  
    let mut fourteen_days:Vec<(String,(usize,usize,usize))> = Vec::new();
    let mut fourteen_weeks:Vec<String> = Vec::new();
    let mut date = start_time + Duration::weeks(weeks_elapsed);
    let mut week_date_start = start_time + Duration::weeks(weeks_elapsed);
    let mut week_date_end = start_time + Duration::weeks(weeks_elapsed) + Duration::days(6);

    let mut kitchen:Vec<NaiveDate> = Vec::new();
    let mut doorway:Vec<NaiveDate> = Vec::new();
    let mut bathroom:Vec<NaiveDate> = Vec::new();

    println!("{:?}", fourteen_days);
    println!("Hello, world!");

     for zustand in zustande.iter() {
        kitchen.push(NaiveDate::parse_from_str(&zustand.kitchen, "%m-%d-%Y").unwrap());
        doorway.push(NaiveDate::parse_from_str(&zustand.doorway, "%m-%d-%Y").unwrap());
        bathroom.push(NaiveDate::parse_from_str(&zustand.bathroom, "%m-%d-%Y").unwrap());
    }
    kitchen.sort_by(|a, b| b.cmp(a));
    doorway.sort_by(|a, b| b.cmp(a));
    bathroom.sort_by(|a, b| b.cmp(a));

    //if day_in_table_as_chrono_thingy==date_today.naive_local().date()

    let mut how_was_the_kitchen_back_then=0;
    let mut how_was_the_bathroom_back_then=0;
    let mut how_was_the_doorway_back_then=0;

    for span in 0..24 {
        if kitchen.contains(&((date + Duration::days(span-10)).naive_local().date())){
            how_was_the_kitchen_back_then=100;
        }
        else {how_was_the_kitchen_back_then=0;}
        if bathroom.contains(&((date + Duration::days(span-10)).naive_local().date())){
            how_was_the_bathroom_back_then=100;
        }
        else {how_was_the_bathroom_back_then=0;}
         if doorway.contains(&((date + Duration::days(span-10)).naive_local().date())){
            how_was_the_doorway_back_then=100;
        }
        else {how_was_the_doorway_back_then=0;}
        environment_of_the_fourteen_days.push((how_was_the_kitchen_back_then,how_was_the_bathroom_back_then,how_was_the_doorway_back_then));
    }

    //info!("env_14 {:#?}", environment_of_the_fourteen_days);
    info!("env14 before {:#?}", environment_of_the_fourteen_days);
    let environment_of_the_fourteen_days = smoothen(environment_of_the_fourteen_days);
    info!("env14 after {:#?}", environment_of_the_fourteen_days);

    for blah in 0..14 {
        let temp_date=format!("{}-{:02}-{:02}", date.year(), date.month(), date.day());
        let temp_week_date=format!("{:02}-{:02}-{} bis {:02}-{:02}-{}", week_date_start.day(), week_date_start.month(), week_date_start.year(), week_date_end.day(), week_date_end.month(), week_date_end.year());
        fourteen_weeks.push(temp_week_date);
        fourteen_days.push((temp_date, environment_of_the_fourteen_days[blah+9]));
        date = date + Duration::days(1);
        week_date_start = week_date_start + Duration::days(7);   
        week_date_end = week_date_end + Duration::days(7);   
    }
    info!("day0 {:#?}", fourteen_days[0].1);
    info!("day1 {:#?}", fourteen_days[1].1);
    info!("day2 {:#?}", fourteen_days[2].1);
    info!("day4 {:#?}", fourteen_days[4].1);
    info!("day6 {:#?}", fourteen_days[6].1);
    info!("day8 {:#?}", fourteen_days[8].1);
    info!("day9 {:#?}", fourteen_days[9].1);
    info!("day10 {:#?}", fourteen_days[10].1);


    //let name_list_yew_thingie= vec!["niclas","marc","mikiya","niclas","marc","mikiya","niclas","marc","mikiya","niclas","marc","mikiya","niclas","marc","mikiya","niclas"];
    //let name_list_yew_thingie = name_list.iter().map(|name| html! {
    //    <p>{format!("name: {}", name)}</p>
    //}).collect::<Html>();
    //let modal_child = use_state(|| vec![]);
    let on_modal_X = Callback::from( move |x: &str| {
        match gloo_utils::document()
        .get_element_by_id("modal_child")
        .expect("Expected to find a #modal_child element")
        .set_attribute("style", "display:none;"){
            Ok(_)=>{info!("modal_succeeded");}
            Err(_)=>{info!("modal_failed");}
        }
    });

    let on_modal_affirm = Callback::from( move |x: &str| {
        match gloo_utils::document()
        .get_element_by_id("modal_child")
        .expect("Expected to find a #modal_child element")
        .set_attribute("style", "display:none;"){
            Ok(_)=>{info!("modal_succeeded");}
            Err(_)=>{info!("modal_failed");}
        }

        let mut modal_name_fetch = gloo_utils::document()
        .get_element_by_id("namensspezifisch")
        .expect("Expected to find a #modal_child element")
        .inner_html();
         info!("modal_child_display_attribute {:#?}",modal_name_fetch.as_str());

         let mut index = 0;
         match modal_name_fetch.as_str() {
            "niclas"=>{index=0}
            "marc"=>{index=1}
            "mikiya"=>{index=2}
            &_=>{info!("haeh was wurde hier denn fuer ein name gegeben");}
         }

         let future = send_postrequest_to_change_table_json(weeks_elapsed, name_list[index]);
         wasm_bindgen_futures::spawn_local(async move {
        match future.await{
            Ok(_)=>{info!("post reqwest succeeded");}
            Err(_)=>{info!("post reqwest failed");}
        }
                   
        });


        match gloo_utils::window().location().reload(){
            Ok(_)=>{info!("reload succeeded")}
            Err(_)=>{info!("reload failed")}
        }



        
         
    });

    let modal_child = html!{
        <div id="modal_child" style="display:none;" content="name:none" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" onclick={ move |_|{on_modal_X.emit("");}}>{"X"}</button>
                    <h2>{"Bist du"}</h2>
                    <h2 id="namensspezifisch">{"Modal Header"}</h2>
                </div>
            <div class="modal-body">
                <p id="modal_text">{"Das Bestätigen ist bindend" }</p>
                <button class="glow-on-hover" onclick={ move |_|{on_modal_affirm.emit("");}}>{"Bestätigen"}</button>    
            </div>
            <div class="modal-footer">
                <h3>{"Hauhaltsplan v 0.1"}</h3>
            </div>
            </div>
        </div>
    };

    //let mut iteration_counter;
    html! {
       

        <div id="wrapper">

            <div id="modal_host" class="modal">
            <Modal children={modal_child} />
            </div>
            

            

            

//            <meta http-equiv="refresh" content="5"/>
            <div>
                <table class="center">
                <tr>
                    <th class="collumnone">{"Datum"}</th>
                    <th>{"Kueche"}</th>
                    <th>{"Bad"}</th>
                    <th>{"Flur"}</th>
                </tr>

                {for fourteen_days.iter().enumerate().map(|(i,x)| html! { 
                    <tr>
                    <td class="date">{x.0.clone()}</td>
//                    <td><button>{ "marc" }</button></td>
//                    <td><button>{ "marc" }</button></td>
//                    <td><button>{ "marc" }</button></td>
//                        if (0>1)
//                         {for name_list.iter().skip(0).take(3).map(|x| html! { <td><NamesList names={name_list_yew_thingie}  /></td> })}
                             //<td>{name_list} </td>
                        {whatever_there_be_in_the_nth_line(i, fourteen_days.clone(),date_today.clone(), tables.clone(), weeks_elapsed, days_elapsed, zustande.clone())}
                    </tr> })}
            </table>
            <p></p>
            <p></p>
            </div>
            <table class="center">
                <tr>
                    <th>{"Woche"}</th>
                    <th>{"Kueche"}</th>
                    <th>{"Bad"}</th>
                    <th>{"Flur"}</th>
                </tr>

                {for fourteen_weeks.iter().enumerate().map(|(i,x)| html! { 
                    <tr>
                    <td>{x.clone()}</td>
                    {for name_list.iter().cloned().cycle().skip(i).take(3).map(|x| html! { <td class="weeksplanned">{x}</td> })}
                    </tr> })}
            </table>
            
           <TablesList tables={(*tables).clone()} on_click={on_table_select.clone()} />
            
        </div>
    }
    

} 


use std::cell::Cell;
use futures::executor::block_on;

thread_local!(static WHEN: Cell<String> = Cell::new("".to_string()));
//static WHEN:&str = "sdf";
use chrono::DateTime;
use chrono::NaiveDate;
use std::sync::{Arc, Mutex};
use yew::{ Html};
fn whatever_there_be_in_the_nth_line(line: usize, fourteen_days: Vec<(std::string::String, (usize, usize, usize))>, date_today: DateTime<Local>, tables:yew::UseStateHandle<Vec<Table>>, weeks_elapsed:i64, days_elapsed:i64, zustande:yew::UseStateHandle<Vec<LastDone>>) -> Html {

    let mut name1 = "1";
    let mut name2= "1";
    let mut name3= "1";

    for name in name_list.iter().cloned().cycle().skip(weeks_elapsed as usize).take(1){
        name1=name;
    }
    for name in name_list.iter().cloned().cycle().skip(weeks_elapsed as usize + 1).take(1){
        name2=name;
    }
    for name in name_list.iter().cloned().cycle().skip(weeks_elapsed as usize + 2).take(1){
        name3=name;
    }


    let onclick = Callback::from(move |x: &str| {
        
        gloo_utils::document()
        .get_element_by_id("namensspezifisch")
        .expect("Expected to find a #namensspezifisch element")
        .set_inner_html(format!("{}", name1).as_str());

        match gloo_utils::document()
        .get_element_by_id("modal_child")
        .expect("Expected to find a #modal_child element")
        .set_attribute("style", "display:block;"){
            Ok(_)=>{info!("modal_succeeded");}
            Err(_)=>{info!("modal_failed");}
        }  

    });

    let onclick2 = Callback::from(move |x: &str| {
        gloo_utils::document()
        .get_element_by_id("namensspezifisch")
        .expect("Expected to find a #namensspezifisch element")
        .set_inner_html(format!("{}", name2).as_str());

        match gloo_utils::document()
        .get_element_by_id("modal_child")
        .expect("Expected to find a #modal_child element")
        .set_attribute("style", "display:block;"){
            Ok(_)=>{info!("modal_succeeded");}
            Err(_)=>{info!("modal_failed");}
        } 
    });

    let onclick3 = Callback::from(move |x: &str| {
        gloo_utils::document()
        .get_element_by_id("namensspezifisch")
        .expect("Expected to find a #namensspezifisch element")
        .set_inner_html(format!("{}", name3).as_str());

        match gloo_utils::document()
        .get_element_by_id("modal_child")
        .expect("Expected to find a #modal_child element")
        .set_attribute("style", "display:block;"){
            Ok(_)=>{info!("modal_succeeded");}
            Err(_)=>{info!("modal_failed");}
        } 
    });

    let day_in_table_as_chrono_thingy = NaiveDate::parse_from_str(&fourteen_days[line].0.clone(), "%Y-%m-%d").unwrap();
    if day_in_table_as_chrono_thingy==date_today.naive_local().date()
    { 
      { return html! {
        
        <>
        <td><button class="glow-on-hover" onclick={ move |_|{ onclick.emit(name1);}}>{format!("Button {}", name1)}</button></td>
        <td><button onclick={ move |_|{ onclick2.emit(name2);}}>{format!("Button {}", name2)}</button></td>
        <td><button onclick={ move |_|{ onclick3.emit(name3);}}>{format!("Button {}", name3)}</button></td>
        
            </>
        }

    }

    }
    else
    {
        //return html!{
       //{for zustande.iter().cloned().cycle().skip(weeks_elapsed as usize).take(3).map(|(x)| html! { 
       //     <td><button onclick={onclick.clone()}>{format!("Button {}", x.bathroom)}</button></td>
       // })
       // } 
       // }
       let mut hue_vec : Vec<f64> = Vec::new();
        hue_vec.push( 1.2 * fourteen_days[line].1.0 as f64);
        hue_vec.push( 1.2 * fourteen_days[line].1.1 as f64);
        hue_vec.push( 1.2 * fourteen_days[line].1.2 as f64);
        
        return html!
        {
            //<td style ={format!("background-color: hsl({}, 100%, 50%);", hue1)}></td>
            //<td style ={format!("background-color: hsl({}, 100%, 50%);", hue2)}></td>
            //<td style ={format!("background-color: hsl({}, 100%, 50%);", hue3)}></td>

             {for hue_vec.iter().map(|(x)| html! { 
                <>
//                <meta http-equiv="refresh" content="1"/>
            <td style ={format!("background-color: hsl({}, 100%, 50%);", x)}></td>
            </>
        })
        }

        }

      
      
            
            
        
    } 
}


fn main() {

    wasm_logger::init(wasm_logger::Config::default());
    let object = JsValue::from("world");
    //info!("Hello {}", object.as_string().unwrap());

    
    
    let now = Utc::now();

    let (is_pm, hour) = now.hour12();

    println!(
        "The current UTC time is {:02}:{:02}:{:02} {}",
        hour,
        now.minute(),
        now.second(),
        if is_pm { "PM" } else { "AM" });

    let (is_common_era, year) = now.year_ce();
    println!(
        "The current UTC date is {}-{:02}-{:02} {:?} ({})",
        year,
        now.month(),
        now.day(),
        now.weekday(),
        if is_common_era { "CE" } else { "BCE" }
    );

    println!("Hello, world!");
    yew::Renderer::<Main>::new().render();
}

