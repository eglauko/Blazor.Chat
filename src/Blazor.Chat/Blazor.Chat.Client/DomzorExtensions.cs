using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace Blazor.Chat.Client
{
    public static class DomzorExtensions
    {
        public static TValue Invoke<TValue>(this IJSRuntime js, string identifier, params object[] args)
        {
            return ((IJSInProcessRuntime)js).Invoke<TValue>(identifier, args);
        }

        public static TReturn Get<TReturn>(this IJSRuntime js, ElementReference el, string property)
            => js.Invoke<TReturn>("Get", el, property);

        public static string GetScrollHeight(this IJSRuntime js, ElementReference el)
            => js.Get<object>(el, "scrollHeight").ToString();
    }
}
