import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProxyItem from "../../packages/StarPort/components/ProxyItem";
import { imageArr } from "../coomposables/data";

const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }}>
        <ProxyItem
          onClick={() => {
            navigate(`detail/${id}`);
          }}
          src={imageArr[id!]}
          port={id}
          key={id}
          style={{width: "500px", height: "150px"}}
        ></ProxyItem>
        <div style={{width: "500px", height: "150px"}}>
        React Fiber是React的一种新的协调引擎（reconciliation engine），它是React16中引入的一项重大改进。Fiber架构的目标是提高React的性能和灵活性，使其更好地适应现代Web应用程序的需求。

在React Fiber中，React的渲染过程被分成了多个优先级较低的小任务（fiber）。每个fiber都可以被中断、恢复和丢弃，这使得React可以在渲染过程中处理优先级更高的任务，例如动画和用户输入事件，从而提高应用程序的响应性能。

Fiber架构还引入了一种称为“可中断的异步渲染”（interruptible asynchronous rendering）的机制。这意味着React可以在渲染过程中暂停和恢复，以便在等待异步数据或其他资源时不会阻塞主线程。这个机制可以使React更好地与现代应用程序中的异步操作和后台任务集成。

此外，Fiber架构还提供了更细粒度的控制和更灵活的渲染方式，使得React可以更好地处理大型和复杂的应用程序。例如，React Fiber可以在渲染过程中优先处理那些对用户可见的部分，以提高应用程序的响应性能。

总的来说，React Fiber是React的一种新的协调引擎，它提供了更高的性能、更灵活的渲染方式和更细粒度的控制，使得React可以更好地适应现代Web应用程序的需求。
        </div>
    </div>
  );
};

export default Home;
