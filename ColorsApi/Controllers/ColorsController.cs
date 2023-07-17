using ColorsApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ColorsApi.Controllers;

public class CreateColorRequestDto
{
    public string? Color { get; set; }
}

[ApiController]
[Route("[controller]")]
public class ColorsController : ControllerBase
{
    private readonly ILogger<ColorsController> _logger;
    private readonly ColorsContext _colorsContext;

    public ColorsController(ILogger<ColorsController> logger, ColorsContext colorsContext)
    {
        _logger = logger;
        _colorsContext = colorsContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ColorRecord>>> GetColorsAsync()
    {
        if (_colorsContext.ColorRecords == null)
        {
            return NotFound();
        }
        var colorRecords = await _colorsContext.ColorRecords.OrderByDescending(colorRecord => colorRecord.Id).ToListAsync();
        return Ok(colorRecords);
    }

    [HttpGet]
    [Route("get-color-by-id")]
    public async Task<ActionResult<ColorRecord>> GetColorByIdAsync(int id)
    {
        if (_colorsContext.ColorRecords == null)
        {
            return NotFound();
        }
        var colorRecord = await _colorsContext.ColorRecords.SingleOrDefaultAsync(c => c.Id == id);
        if (colorRecord == null)
        {
            return NotFound();
        }
        return Ok(colorRecord);
    }

    [HttpPost]
    public async Task<ActionResult<ColorRecord>> CreateColorAsync(CreateColorRequestDto createColorRequest)
    {
        if (String.IsNullOrEmpty(createColorRequest.Color))
        {
            return BadRequest();
        }

        var colorRecord = new ColorRecord { Id = 0, Color = createColorRequest.Color };
        _colorsContext.ColorRecords.Add(colorRecord);
        await _colorsContext.SaveChangesAsync();
        return Created($"/get-color-by-id?id={colorRecord.Id}", colorRecord);
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> DeleteColorAsync(int id)
    {
        var colorRecord = await _colorsContext.ColorRecords.FindAsync(id);
        if (colorRecord == null)
        {
            return NotFound();
        }

        _colorsContext.ColorRecords.Remove(colorRecord);
        await _colorsContext.SaveChangesAsync();
        return NoContent();
    }

}
